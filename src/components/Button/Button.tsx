import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export function Button(props: ButtonProps) {
  const buttonClasses =
    typeof props.className === "string" && props.className !== ""
      ? `cursor-pointer outline-none ${props.className}`
      : "cursor-pointer outline-none";
  return (
    <button {...props} className={buttonClasses}>
      {props.children}
    </button>
  );
}
