// pages/landlord-onboarding.tsx
import MultiStepForm from './MultiStepForm';
import { landlordOnboardingSchema, LandLordFormData } from '@/lib/zod/validation';
import { UserCircle, MapPin, Home, ClipboardList, Wallet, ImagePlus, CheckCircle2 } from "lucide-react"


const LandlordOnboardingPage = () => {
    const handleLandlordSubmit = (data: LandLordFormData) => {
        console.log("Landlord form submitted:", data);
    };

    return (
        <MultiStepForm<LandLordFormData>
            steps={landlordOnboardingSteps}
            schema={landlordOnboardingSchema}
            onSubmit={handleLandlordSubmit}
            title="Landlord Onboarding"
        />
    );
};

export default LandlordOnboardingPage;



const landlordOnboardingSteps = [
    {
        step: 1,
        title: "Personal Information",
        description: "Provide your phone number, WhatsApp details, and other contact information, including ID and banking details for verification purposes.",
        icon: UserCircle,
        fields: [
            { name: "phone", label: "Phone Number", type: "tel", placeholder: "e.g., 08012345678", required: true, icon: "Phone" },
            { name: "whatsapp", label: "WhatsApp Number (optional)", type: "tel", placeholder: "e.g., 08012345678", required: false, icon: "MessageCircle" },
            { name: "alternatePhone", label: "Alternate Phone Number (optional)", type: "tel", placeholder: "e.g., 08123456789", required: false, icon: "PhoneForwarded" },
            { name: "address", label: "Office/Business Address", type: "text", placeholder: "Enter your business address", required: false, icon: "MapPin" },
            { name: "idType", label: "ID Type", type: "select", options: ["National ID", "Voter's ID", "Driver's License"], placeholder: "Select ID type", required: true, icon: "IDCard" },
            { name: "idNumber", label: "ID Number", type: "text", placeholder: "Enter your ID number", required: true, icon: "Key" },
            { name: "bankAccountNumber", label: "Bank Account Number", type: "text", placeholder: "Enter your bank account number", required: true, icon: "CreditCard" },
            { name: "accountName", label: "Bank Account Name", type: "text", placeholder: "Enter your bank account name", required: true, icon: "User" },
        ],
    },
    {
        step: 2,
        title: "Property Location",
        description: "Tell us the location of your property so students can easily find it.",
        icon: MapPin,
        fields: [
            { name: "university", label: "Nearby University", type: "select", options: ["UNILAG", "UNIBEN", "UI", "OAU", "FUTA", "LASU", "Others"], placeholder: "Select school", required: true, icon: "School" },
            { name: "town", label: "Town/City", type: "text", placeholder: "e.g., Nsukka", required: true, icon: "Map" },
            { name: "area", label: "Area/Street Name", type: "text", placeholder: "e.g., Odenigbo Road", required: true, icon: "Locate" },
            { name: "mapLocation", label: "Google Maps Link", type: "text", placeholder: "Paste Google Maps URL", required: false, icon: "Link2" },
        ],
    },
    {
        step: 3,
        title: "Property Details",
        description: "Provide specific details about the property like room types and amenities available.",
        icon: Home,
        fields: [
            { name: "propertyName", label: "Property Name", type: "text", placeholder: "Optional", required: false, icon: "Home" },
            { name: "roomTypes", label: "Available Room Types", type: "multi-select", options: ["Single Room", "Self-Contain", "1 Bedroom Flat", "Shared Room", "Boys Quarters (BQ)"], required: true, icon: "LayoutGrid" },
            { name: "numberOfRooms", label: "Number of Rooms", type: "number", placeholder: "e.g., 10", required: true, icon: "Hash" },
            { name: "isFenced", label: "Fenced Compound?", type: "checkbox", required: false, icon: "ShieldCheck" },
            { name: "hasSecurity", label: "Security Available?", type: "checkbox", required: false, icon: "Lock" },
            { name: "hasCCTV", label: "Security Camera Available?", type: "checkbox", required: false, icon: "Camera" },
        ],
    },
    {
        step: 4,
        title: "Amenities and Facilities",
        description: "List the amenities and facilities available in your property.",
        icon: ClipboardList,
        fields: [
            {
                name: "amenities",
                label: "Available Amenities",
                type: "multi-select",
                options: ["Water Supply", "Electricity (Prepaid Meter)", "Generator", "Kitchen", "Toilet/Bathroom", "Wardrobe", "Tiled Floor", "Wi-Fi"],
                placeholder: "Select all that apply",
                required: false,
                icon: "CheckSquare",
            },
        ],
    },
    {
        step: 5,
        title: "Pricing & Payment Terms",
        description: "Set your pricing, including payment terms (e.g., monthly, yearly) and any additional fees.",
        icon: Wallet,
        fields: [
            { name: "priceRange", label: "Price per Room (₦)", type: "text", placeholder: "e.g., ₦120,000", required: true, icon: "NairaSign" },
            { name: "paymentCycle", label: "Payment Type", type: "select", options: ["Yearly", "Per Semester", "Quarterly"], placeholder: "Choose payment type", required: true, icon: "Calendar" },
            { name: "additionalFees", label: "Other Fees", type: "textarea", placeholder: "e.g., Caution fee, Agent fee", required: false, icon: "FileText" },
        ],
    },
    {
        step: 6,
        title: "Upload Property Images",
        description: "Upload clear and detailed images of the property to attract students.",
        icon: ImagePlus,
        fields: [
            {
                name: "images",
                label: "Property Images",
                type: "file",
                accept: "image/*",
                multiple: true,
                required: true,
                icon: "Upload",
                placeholder: "Upload at least 3 clear pictures",
            },
        ],
    },
    {
        step: 7,
        title: "Final Confirmation",
        description: "Review and confirm that all the information you provided is correct.",
        icon: CheckCircle2,
        fields: [
            {
                name: "termsAgreed",
                label: "I confirm all information is accurate",
                type: "checkbox",
                required: true,
                icon: "ShieldCheck",
            },
        ],
    },
];