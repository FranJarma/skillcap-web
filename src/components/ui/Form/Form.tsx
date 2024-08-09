"use client";

import React, {FC, useState} from "react";

import {Input} from "@nextui-org/react";

import {Control, FormData} from "./FormTypes";

export const Form: FC<{data: FormData[]}> = ({data}) => {
    const onSubmit = () => {
        alert("Test");
    };
    return (
        <form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
            {data.map(
                (
                    {
                        className,
                        control,
                        defaultValue,
                        disabled,
                        label,
                        name,
                        placeholder,
                        type,
                    },
                    index
                ) => (
                    <InputComponent
                        key={index}
                        className={className}
                        control={control}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        label={label}
                        name={name}
                        placeholder={placeholder}
                        type={type}
                    />
                )
            )}
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
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={handleChange}
        />
    ) : null;
};
