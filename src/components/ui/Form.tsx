import {Input} from "@nextui-org/react";
import React, {FC, useState} from "react";

export enum Control {
    Input = "input",
    Select = "select",
}

export enum Type {
    Date = "date",
    Number = "number",
    Text = "text",
}

export interface FormData {
    control: Control;
    label: string;
    name: string;
    className?: string;
    defaultValue?: string | (readonly string[] & string) | undefined;
    disabled?: boolean;
    placeholder?: string;
    required?: boolean;
    type?: Type;
}

export const Form: FC<{data: FormData[]}> = ({data}) => {
    const onSubmit = () => {
        alert("Test");
    };
    return (
        <form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
            {data.map((formData, index) => (
                <InputComponent
                    className={formData.className}
                    control={formData.control}
                    defaultValue={formData.defaultValue}
                    disabled={formData.disabled}
                    label={formData.label}
                    key={index}
                    name={formData.name}
                    placeholder={formData.placeholder}
                    type={formData.type}
                />
            ))}
        </form>
    );
};

const InputComponent: FC<FormData> = ({
    className,
    control,
    defaultValue,
    disabled,
    label,
    name,
    placeholder,
    required,
    type,
}) => {
    const [value, setValue] = useState<
        string | (readonly string[] & string) | undefined
    >(defaultValue || "");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return control === Control.Input ? (
        <Input
            className={className}
            disabled={disabled}
            isRequired={required}
            label={label}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            type={type}
            value={value}
        />
    ) : null;
};
