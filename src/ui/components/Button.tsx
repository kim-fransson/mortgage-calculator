import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { classNames, focusRing } from "../../utils";

export interface ButtonProps extends AriaButtonProps {
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button = ({ variant = "primary", ...props }: ButtonProps) => {
  return (
    <AriaButton
      {...props}
      className={(renderProps) =>
        classNames(
          props.className,
          focusRing(renderProps.isFocusVisible),
          "cursor-pointer flex items-center justify-center gap-3 text-nowrap",
          variant === "primary"
            ? "h-14 px-5 bg-lime rounded-full text-slate-900 text-preset-3"
            : "text-preset-4 underline text-slate-700 rounded-100"
        )
      }
    />
  );
};
