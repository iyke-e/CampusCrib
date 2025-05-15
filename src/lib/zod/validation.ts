import { z } from "zod";

const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#%&*])[A-Za-z\d!@#%&*]{8,}$/;

// Login Schema
export const loginSchema = z.object({
  email: z.string().email("Please Enter a valid email address"),
  password: z.string(),
});

// Signup Schema (includes extra fields)
export const signupSchema = loginSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  terms: z.boolean().refine((val) => val, "You must accept terms"),
  password: z
    .string()
    .min(8, "password must be at least 8 digits")
    .regex(
      regex,
      "Password must include at least one uppercase letter, one number, and one special character"
    ),
});

// Profile Update Schema
export const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
});

// Change Password Schema
export const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(8, "Old password is required"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

const fileSchema = z
  .any()
  .refine(
    (file) =>
      file instanceof File ||
      (Array.isArray(file) && file.every((f) => f instanceof File)),
    {
      message: "Please upload a valid file",
    }
  );

export const landlordOnboardingSchema = z
  .object({
    // Step 1 - Landlord Profile Setup
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
    profilePicture: z.any().optional(),
    idUpload: z.any().optional(),

    // Step 2 - Property Overview
    propertyName: z.string().min(1, "Property name is required"),
    propertyType: z.enum(["Hostel", "Apartment", "Shared Room"]),
    roomCount: z.coerce.number().min(1, "Number of rooms is required"),
    pricingRange: z.string().optional(),
    paymentPlan: z.enum(["Monthly", "Per Semester", "Yearly"]),
    description: z.string().optional(),

    // Step 3 - Property Location
    address: z.string().min(1, "Address is required"),
    nearbyCampus: z.string().min(1, "Campus info is required"),
    state: z.string().min(1, "State is required"),
    lga: z.string().min(1, "LGA is required"),
    area: z.string().optional(),
    mapPin: z.any().optional(), // Assuming map input is handled separately

    // Step 4 - Room & Amenities
    roomTypes: z
      .array(z.enum(["Single", "Double", "Bunk", "Ensuite"]))
      .min(1, "At least one room type is required"),
    furnished: z.enum(["Yes", "No"]),
    bathroomType: z.enum(["Private", "Shared"]),
    kitchenAccess: z.enum(["Private", "Shared", "None"]),
    roomCountPerType: z.string().optional(),
    amenities: z
      .array(
        z.enum([
          "Electricity",
          "Water",
          "Wi-Fi",
          "Security",
          "Cleaning Service",
          "Fan",
          "Balcony",
          "Air Conditioning",
        ])
      )
      .optional(),
    houseRules: z.string().optional(),

    // Step 5 - Media Uploads
    images: fileSchema,
    videoTour: z.any().optional(),
    captions: z.string().optional(),

    // Step 6 - Availability & Payment
    availableFrom: z.string().min(1, "Availability date is required"),
    minStay: z.string().optional(),
    contactMethod: z.enum(["Phone", "In-App Messaging", "Email"]),
    bankName: z.string().min(1, "Bank name is required"),
    accountName: z.string().min(1, "Account name is required"),
    accountNumber: z.string().min(10, "Account number is required"),
    bookingType: z.enum(["Instant Book", "Request to Book"]),
    cancellationPolicy: z.enum(["Flexible", "Moderate", "Strict"]).optional(),
    termsAccepted: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const roommateOnboardingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  phone: z.string().min(10, "Phone number is required"),
  whatsapp: z.string().optional(),

  gender: z.enum(["Male", "Female", "Other"]),
  level: z.enum(["100", "200", "300", "400", "500", "Postgraduate"]),

  roomType: z.enum([
    "Self-Contain",
    "Single Room",
    "Room & Parlor",
    "2 Bedroom Flat",
    "3 Bedroom Flat",
  ]),
  budget: z
    .number({ invalid_type_error: "Budget must be a number" })
    .positive("Budget must be a positive number"),

  preferredLocations: z.array(z.string()).optional(),
  hasAccommodation: z.boolean().refine((val) => val !== undefined, {
    message: "Please specify if you already have accommodation",
  }),

  cleanliness: z.enum(["Very Tidy", "Moderate", "Not Too Concerned"]),
  wakeUpTime: z.enum(["Before 6AM", "6AM - 8AM", "8AM - 10AM", "After 10AM"]),
  sleepTime: z.enum(["Before 10PM", "10PM - 12AM", "After 12AM"]),
  cooking: z.enum(["Yes", "Sometimes", "Rarely"]),

  socialLevel: z.enum(["Introvert", "Ambivert", "Extrovert"]),
  music: z.enum(["Yes", "No", "Occasionally"]),
  visitors: z.enum(["Yes", "No", "Sometimes"]),
  smoking: z.enum(["Yes", "No"]),
  drinking: z.enum(["Yes", "No"]),

  hobbies: z.array(
    z.enum([
      "Reading",
      "Gaming",
      "Movies",
      "Sports",
      "Coding",
      "Music",
      "Cooking",
      "Other",
    ])
  ),
  personalityTraits: z.array(
    z.enum([
      "Calm",
      "Talkative",
      "Organized",
      "Flexible",
      "Focused",
      "Easygoing",
      "Private",
    ])
  ),

  dealBreakers: z.string().optional(),
  extraInfo: z.string().optional(),
});

export type RoommateFormData = z.infer<typeof roommateOnboardingSchema>;
export type LandLordFormData = z.infer<typeof landlordOnboardingSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;
export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;
