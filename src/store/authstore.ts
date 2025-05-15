import { create } from "zustand";
import { persist } from "zustand/middleware";
import { supabase } from "@/lib/supabase/SupabaseClient";

interface User {
  id: string;
  email: string;
  name?: string;
  role?: string;
  onboarding_complete?: boolean;
}

interface Tokens {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  expires_at: number;
}

interface AuthState {
  user: User | null;
  tokens: Tokens | null;
  signup: (data: { email: string; password: string; name: string; terms: boolean }) => Promise<{ success: boolean; message: string }>;
  login: (data: { email: string; password: string }) => Promise<{ success: boolean; message: string }>;
  logout: () => Promise<{ success: boolean; message: string }>;
  getUser: () => Promise<{ success: boolean; message: string }>;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      tokens: null,

      signup: async ({ email, password, name, terms }) => {
        if (!terms) {
          return { success: false, message: "You must accept the terms and conditions." };
        }

        if (!email || !password || !name) {
          return { success: false, message: "Missing required fields." };
        }

        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
          return { success: false, message: `Sign up error: ${error.message}` };
        }

        if (data?.user) {
          const userId = data.user.id;

          const { error: profileError } = await supabase
            .from("profiles")
            .upsert([{ id: userId, name, email }]);

          if (profileError) {
            return { success: false, message: `Profile update error: ${profileError.message}` };
          }

          set({ user: { id: userId, email, name } });

          return { success: true, message: "Sign up successful! Log in to continue." };
        }

        return { success: false, message: "Failed to complete sign up. Please try again." };
      },

      login: async ({ email, password }) => {
        try {
          const { data, error } = await supabase.auth.signInWithPassword({ email, password });

          if (error) {
            return { success: false, message: `Login error: ${error.message}` };
          }

          if (!data?.user || !data?.session) {
            return { success: false, message: "Unexpected login error. Please try again." };
          }

          const { access_token, refresh_token, expires_in, expires_at } = data.session;

          const { data: profileData, error: profileError } = await supabase
            .from("profiles")
            .select("name, role, onboarding_complete")
            .eq("id", data.user.id)
            .single();

          if (profileError) {
            return { success: false, message: `Profile fetch error: ${profileError.message}` };
          }

          set({
            user: {
              id: data.user.id,
              email,
              name: profileData?.name || "",
              role: profileData?.role || "",
              onboarding_complete: profileData?.onboarding_complete || false,
            },
            tokens: {
              access_token,
              refresh_token,
              expires_in: expires_in ?? 3600,
              expires_at: expires_at ?? Math.floor(Date.now() / 1000) + 3600,
            },
          });

          return { success: true, message: "Login successful!" };
        } catch (err) {
          return { success: false, message: `Unexpected error: ${err}` };
        }
      },

      logout: async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          return { success: false, message: `Logout error: ${error.message}` };
        }
        set({ user: null, tokens: null });
        return { success: true, message: "Logged out successfully." };
      },

      getUser: async () => {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
          return { success: false, message: `Get user error: ${error.message}` };
        }

        if (data.user) {
          const { data: profileData, error: profileError } = await supabase
            .from("profiles")
            .select("name, role, onboarding_complete")
            .eq("id", data.user.id)
            .single();

          if (profileError) {
            return { success: false, message: `Profile fetch error: ${profileError.message}` };
          }

          set({
            user: {
              id: data.user.id,
              email: data.user.email!,
              name: profileData?.name || "",
              role: profileData?.role || "",
              onboarding_complete: profileData?.onboarding_complete || false,
            },
          });

          return { success: true, message: "User data retrieved successfully." };
        }

        return { success: false, message: "No user is logged in." };
      },
    }),
    {
      name: "auth-storage",
      partialize: (state): Partial<AuthState> => ({
        user: state.user,
        tokens: state.tokens,
      }),
    }
  )
);

export default useAuthStore;
