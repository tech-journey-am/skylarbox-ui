import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options?: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      error,
      helperText,
      options,
      children,
      placeholder,
      ...props
    },
    ref
  ) => {
    const selectId = React.useId();

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block font-medium text-gray-700"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            {label}
          </label>
        )}
        <select
          id={selectId}
          className={cn(
            "block w-full border border-gray-300 rounded-lg shadow-sm",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
            "appearance-none bg-white",
            error && "border-red-300 focus:ring-red-500 focus:border-red-500",
            className
          )}
          style={{
            padding: "0.5vw 0.75vw",
            fontSize: "clamp(16px, 1vw, 1.25rem)",
          }}
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options
            ? options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))
            : children}
        </select>
        {error && (
          <p
            className="text-red-600"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            {error}
          </p>
        )}
        {helperText && !error && (
          <p
            className="text-gray-500"
            style={{ fontSize: "clamp(16px, 1vw, 1.25rem)" }}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;

