// Button.tsx
import React, { useLayoutEffect } from "react";
import tenoxui, { defineProps, makeStyles } from "tenoxui";
import newHovers from "../utils/applyHovers";
import buttonStyle from "../style/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "danger"
    | "success"
    | "info"
    | "warning"
    | "outlined"
    | "disabled";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  className,
  ...props
}) => {
  useLayoutEffect(() => {
    defineProps(buttonStyle.props);
    makeStyles(buttonStyle.classes);
    newHovers({
      ".btn": [
        `opa-1 sc-1`,
        `opa-0.7 sc-0.97`,
        "tr-prop-all tr-time-0.3s tr-timing-ease",
      ],
      ".btn.disabled": ["opa-1 sc-unset", `opa-1 sc-unset`, "sc-unset"],
    });
    tenoxui();
  }, []);

  // const buttonSize = size === 'sm' ?  ''

  return (
    <button className={`btn ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
