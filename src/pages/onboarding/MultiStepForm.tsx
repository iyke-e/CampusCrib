// components/MultiStepForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/utils/Button';
import Input from '@/components/input/Input';
import { useRef, useState } from 'react';
import Header from '@/components/layout/Header';

export interface FieldConfig {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    options?: string[];
    required?: boolean;
    icon?: string;
    accept?: string;
    multiple?: boolean;
}

export interface StepConfig {
    step: number;
    title: string;
    description: string;
    icon: React.ElementType;
    fields: FieldConfig[];
}

interface MultiStepFormProps<T> {
    steps: StepConfig[];
    schema: any;
    onSubmit: (data: T) => void;
    title?: string;
}

const MultiStepForm = <T extends {}>({ steps, schema, onSubmit, title }: MultiStepFormProps<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<T>({ resolver: zodResolver(schema) });

    const [activeStep, setActiveStep] = useState(1);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollToTop = () => scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    const currentStepData = steps[activeStep - 1];

    return (
        <div className="h-screen flex flex-col">
            <Header nav={false} />
            <div className="flex flex-1 border-t border-border/30 overflow-hidden">
                {/* Sidebar */}
                <div className="w-[30%] border-r pl-10 py-8 border-border/30">
                    <h1 className="text-3xl font-medium mb-4"> Step {activeStep}</h1>
                    <p className="text-subtxt">{title}</p>
                    <ul className="mt-8 grid justify-items-end">
                        {steps.map((item, index) => (
                            <li key={index} className={`flex text-right px-8 py-4 steps relative gap-2 before:bg-maintxt items-center
                ${index === activeStep - 1 ? " before:w-7" : "before:w-3"}`}>
                                <p className={`${index === activeStep - 1 ? "text-xl" : "text-sm"}`}>{item.title}</p>
                                <item.icon />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Form Section */}
                <div ref={scrollRef} className="py-10 px-16 overflow-y-auto custom-scrollbar h-full w-[70%]">
                    <h1 className="text-3xl font-medium mb-6">{currentStepData.title}</h1>
                    <p className="mb-6">{currentStepData.description}</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-140">
                        {currentStepData.fields.map((field: any) => (
                            <Input key={field.name} {...field} register={register} />
                        ))}
                        <div className="flex justify-between pt-6">
                            <div>
                                {activeStep > 1 && (
                                    <Button type="outline" style="py-2" onClick={() => { setActiveStep(prev => prev - 1); scrollToTop(); }}>
                                        Prev
                                    </Button>
                                )}

                            </div>

                            {activeStep < steps.length ? (
                                <Button onClick={() => { setActiveStep(prev => prev + 1); scrollToTop(); }} style="py-2">
                                    Next
                                </Button>
                            ) : (
                                <Button disabled={isSubmitting} style="py-2">
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </Button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
