import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { focusRing } from "../../styles";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends AriaButtonProps {
  variant?: "primary" | "secondary";
}

export const Button = ({ variant = "primary", ...props }: ButtonProps) => {
  return (
    <AriaButton
      {...props}
      className={(renderProps) =>
        twMerge(
          focusRing(renderProps),
          "cursor-pointer flex items-center justify-center gap-300",
          variant === "primary" &&
            "h-14 px-500 bg-lime rounded-full text-slate-900 text-preset-3",
          variant === "secondary" && "text-preset-4 underline text-slate-700"
        )
      }
    />
  );
};
