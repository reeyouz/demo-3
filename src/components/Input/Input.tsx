import React from "react";
import "./Input.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export function Input(props: InputProps) {
  const containerClasses =
    typeof props.value === "string" && props.value !== ""
      ? "relative form-container full"
      : "relative form-container";
  return (
    <div className={containerClasses}>
      <input {...props} placeholder="" className="w-full form-input" />
      <label className="block absolute form-label">{props.placeholder}</label>
    </div>
  );
}
