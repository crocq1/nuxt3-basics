export interface FormInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?:
  "text"
  | "phone"
  | "email"
  | "password"
  | "number"
  | "date"
  | "time"
  | "search";
  modelValue: string | number;
}
