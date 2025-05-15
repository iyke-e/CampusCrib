

// pages/landlord-onboarding.tsx
import MultiStepForm from './MultiStepForm';
import { RoommateFormData, roommateOnboardingSchema } from '@/lib/zod/validation';
import {
    UserCircle,
    Home,
    Sun,
    Users,
    HeartHandshake,
    Ban,
} from "lucide-react";

const StudentOnboarding = () => {
    const handleLandlordSubmit = () => {
        console.log("Landlord form submitted:",);
    };

    return (
        <MultiStepForm<RoommateFormData>
            steps={StudentOnboardingSteps}
            schema={roommateOnboardingSchema}
            onSubmit={handleLandlordSubmit}
            title="Student Onboarding"
        />
    );
};

export default StudentOnboarding;


const StudentOnboardingSteps = [
    {
        step: 1,
        title: "Personal Information",
        description: "Basic contact information to help us reach you if needed.",
        icon: UserCircle,
        fields: [
            { name: "fullName", label: "Full Name", type: "text", placeholder: "e.g., John Doe", required: true, icon: "User" },
            { name: "phone", label: "Phone Number", type: "tel", placeholder: "e.g., 08012345678", required: true, icon: "Phone" },
            { name: "whatsapp", label: "WhatsApp Number (optional)", type: "tel", placeholder: "e.g., 08012345678", required: false, icon: "MessageCircle" },
            { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"], placeholder: "Select gender", required: true, icon: "VenetianMask" },
            { name: "level", label: "Level of Study", type: "select", options: ["100", "200", "300", "400", "500", "Postgraduate"], placeholder: "Select level", required: true, icon: "GraduationCap" },
        ],
    },
    {
        step: 2,
        title: "Accommodation Preferences",
        description: "Your ideal off-campus living setup.",
        icon: Home,
        fields: [
            {
                name: "roomType",
                label: "Preferred Room Type",
                type: "select",
                options: ["Self-Contain", "Single Room", "Room & Parlor", "2 Bedroom Flat", "3 Bedroom Flat"],
                placeholder: "Select preferred room type",
                required: true,
                icon: "Home",
            },
            {
                name: "budget",
                label: "Monthly Budget (₦)",
                type: "number",
                placeholder: "e.g., 30000",
                required: true,
                icon: "Wallet",
            },
            {
                name: "preferredLocations",
                label: "Preferred Locations",
                type: "multiselect",
                options: ["Close to school", "Quiet area", "Near transportation", "No preference"],
                placeholder: "Select preferred areas",
                required: false,
                icon: "Map",
            },
            {
                name: "hasAccommodation",
                label: "Do You Already Have Accommodation?",
                type: "select",
                options: ["Yes", "No"],
                placeholder: "Select an option",
                required: true,
                icon: "HomeCheck"
            }

        ],
    },
    {
        step: 3,
        title: "Lifestyle & Routine",
        description: "Tell us about your daily habits.",
        icon: Sun,
        fields: [
            { name: "cleanliness", label: "Cleanliness Level", type: "select", options: ["Very Tidy", "Moderate", "Not Too Concerned"], placeholder: "Select your cleanliness level", required: true, icon: "Sparkles" },
            { name: "wakeUpTime", label: "Usual Wake-Up Time", type: "select", options: ["Before 6AM", "6AM - 8AM", "8AM - 10AM", "After 10AM"], placeholder: "Select wake-up time", required: true, icon: "AlarmClock" },
            { name: "sleepTime", label: "Usual Sleep Time", type: "select", options: ["Before 10PM", "10PM - 12AM", "After 12AM"], placeholder: "Select sleep time", required: true, icon: "Moon" },
            { name: "cooking", label: "Do You Cook Often?", type: "select", options: ["Yes", "Sometimes", "Rarely"], placeholder: "Select cooking frequency", required: true, icon: "ChefHat" },
        ],
    },
    {
        step: 4,
        title: "Social Preferences",
        description: "Help us find a compatible roommate personality-wise.",
        icon: Users,
        fields: [
            { name: "socialLevel", label: "How Social Are You?", type: "select", options: ["Introvert", "Ambivert", "Extrovert"], placeholder: "Select your social level", required: true, icon: "Smile" },
            { name: "music", label: "Play Music Out Loud?", type: "select", options: ["Yes", "No", "Occasionally"], placeholder: "Select music habit", required: true, icon: "Music" },
            { name: "visitors", label: "Comfortable With Visitors?", type: "select", options: ["Yes", "No", "Sometimes"], placeholder: "Select visitor preference", required: true, icon: "UsersRound" },
            { name: "smoking", label: "Do You Smoke?", type: "select", options: ["Yes", "No"], required: true, placeholder: "Select smoking status", icon: "CigaretteOff" },
            { name: "drinking", label: "Do You Drink?", type: "select", options: ["Yes", "No"], required: true, placeholder: "Select drinking status", icon: "Wine" },
        ],
    },
    {
        step: 5,
        title: "Hobbies & Personality",
        description: "Your interests help us make better roommate matches.",
        icon: HeartHandshake,
        fields: [
            {
                name: "hobbies",
                label: "Hobbies/Interests",
                type: "multiselect",
                options: ["Reading", "Gaming", "Movies", "Sports", "Coding", "Music", "Cooking", "Other"],
                placeholder: "Select your hobbies",
                icon: "Heart",
            },
            {
                name: "personalityTraits",
                label: "Personality Traits",
                type: "multiselect",
                options: ["Calm", "Talkative", "Organized", "Flexible", "Focused", "Easygoing", "Private"],
                placeholder: "Select traits that describe you",
                icon: "Sparkle",
            },
        ],
    },
    {
        step: 6,
        title: "Non-Negotiables & Final Notes",
        description: "Let us know your deal-breakers and anything else.",
        icon: Ban,
        fields: [
            { name: "dealBreakers", label: "Roommate Deal-Breakers", type: "textarea", placeholder: "Mention any red flags or deal-breakers", required: false, icon: "Ban" },
            { name: "extraInfo", label: "Additional Information", type: "textarea", placeholder: "Add any special requests or context", required: false, icon: "StickyNote" },
        ],
    },
];
