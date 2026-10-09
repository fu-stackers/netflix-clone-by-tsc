import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-white text-black hover:bg-white/75",
  secondary: "bg-gray-500/70 text-white hover:bg-gray-500/50",
};

function Button({
  label,
  variant = "primary",
  icon,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center gap-2 rounded px-5 py-2 text-sm font-semibold transition-colors md:px-7 md:py-2.5 md:text-lg ${VARIANT_STYLES[variant]} ${className}`}
      {...rest}
    >
      {icon}
      {label}
    </button>
  );
}

export default Button;
