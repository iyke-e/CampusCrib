import { Check, Square } from "lucide-react"; // Import Lucide React icons for checked and unchecked states
import { useTheme } from "@/hooks/useTheme";
import Select from "react-select"; // Import React-Select

interface InputProps {
    label?: string;
    type?: string;
    name: string;
    placeholder?: string;
    id?: string;
    register?: any;
    options?: string[];
    multiple?: boolean;
    required?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    type = "text",
    name,
    placeholder,
    id,
    register,
    options = [],
    multiple = false,
    required = false,
    ...props
}) => {
    const { theme } = useTheme();

    const renderInput = () => {
        switch (type) {
            case "select":
                return (
                    <Select
                        className="input" // Add a custom class for styling
                        classNamePrefix="react-select"
                        options={options.map((opt) => ({ value: opt, label: opt }))}
                        onChange={(selectedOption: any) => {
                            if (register) {
                                register(name).onChange(selectedOption?.value);
                            }
                        }}
                        required={required}
                        styles={{
                            control: (baseStyle) => ({
                                ...baseStyle,
                                backgroundColor: "transparent",
                                border: "transparent",
                                color: "red",
                            }),
                            singleValue: (baseStyle) => ({
                                ...baseStyle,
                                color: theme === "dark" ? "white" : "#414141",
                                outline: "transparent",
                            }),
                        }}
                    />
                );

            case "multi-select":
                return (
                    <Select
                        isMulti
                        className="input"
                        options={options.map((opt) => ({ value: opt, label: opt }))}
                        onChange={(selectedOption: any) => {
                            if (register) {
                                register(name).onChange(selectedOption.map((item: any) => item.value));
                            }
                        }}
                        required={required}
                        styles={{
                            control: (baseStyle) => ({
                                ...baseStyle,
                                backgroundColor: "transparent",
                                border: "transparent",
                                color: "red",
                            }),
                            singleValue: (baseStyle) => ({
                                ...baseStyle,
                                color: theme === "dark" ? "white" : "#414141",
                                outline: "transparent",
                            }),
                        }}
                    />
                );

            case "radio":
                return (
                    <div className="flex gap-4">
                        {options.map((opt) => (
                            <label key={opt} className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    value={opt}
                                    {...register(name)}
                                    required={required}
                                />
                                {opt}
                            </label>
                        ))}
                    </div>
                );



                return (
                    <div className="grid gap-2">
                        {options.map((opt) => (
                            <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                {/* Custom checkbox with Lucide icons */}
                                <input
                                    type="checkbox"
                                    value={opt}
                                    className=""
                                    {...register(name)}
                                    required={required}
                                />
                                <span className="flex justify-center items-center w-5 h-5 border border-gray-300 rounded-md">
                                    {/* Conditionally render icons based on the checkbox state */}
                                    <Check className="w-4 h-4 text-blue-500" />
                                    <Square className="w-4 h-4 text-gray-500" />
                                </span>
                                {opt}
                            </label>
                        ))}
                    </div>
                );

            case "checkbox":
                return (
                    <div className="">
                        <input
                            type="checkbox"
                            {...register(name)}
                            required={required}
                        />
                    </div>
                );

            case "textarea":
                return (
                    <textarea
                        className="input"
                        placeholder={placeholder}
                        {...register(name)}
                        required={required}
                    />
                );

            case "file":
                return (
                    <input
                        type="file"
                        className="input"
                        {...register(name)}
                        multiple={multiple}
                        required={required}
                    />
                );


            default:
                return (
                    <input
                        className="input"
                        type={type}
                        placeholder={placeholder}
                        {...register(name)}
                        required={required}
                    />
                );
        }
    };

    return (
        <div className={`${type === "checkbox" ? "flex gap-2" : "grid gap-2"}`}>
            {type === "checkbox" ? <>
                {renderInput()}
                {label && <label className="text-sm font-medium">{label}</label>}
            </> : <>
                {label && <label className="text-sm font-medium">{label}</label>}
                {renderInput()}
            </>}

        </div>
    );
};

export default Input;
