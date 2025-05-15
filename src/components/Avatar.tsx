import React from "react";
import { User } from "lucide-react"; // Import the icon from lucide-react

interface AvatarProps {
    src?: string; // Image URL
    alt?: string; // Alt text
    fallbackText?: string; // Text to show when no image (e.g. initials)
    size?: number; // Avatar size in px
    className?: string; // Extra classes
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt = "User avatar",
    size = 40,
    className = ""
}) => {
    const styles = {
        width: `${size}px`,
        height: `${size}px`
    };

    return (
        <div
            className={`rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-white font-medium text-sm ${className}`}
            style={styles}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            ) : (
                // Use Lucide User icon as fallback
                <User className="text-gray-500" size={size * 0.6} />
            )}
        </div>
    );
};

export default Avatar;
