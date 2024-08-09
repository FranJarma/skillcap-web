export enum Control {
    Input = "input",
    Select = "select",
}

export enum Type {
    Date = "date",
    Number = "number",
    Text = "text",
}

export type FormData = {
    control: Control;
    label: string;
    name: string;
    className?: string;
    defaultValue?: string | (readonly string[] & string) | undefined;
    disabled?: boolean;
    placeholder?: string;
    required?: boolean;
    type?: Type;
};
