import { ReactNode } from "react";
import {
  FieldError,
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  RadioProps,
  ValidationResult,
} from "react-aria-components";
import { Label } from "./Field";
import { composeTailwindRenderProps } from "../../utils";
import { fieldBorderStyles, focusRing } from "../../styles";
import { twMerge } from "tailwind-merge";

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
  label?: string;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function RadioGroup(props: RadioGroupProps) {
  return (
    <AriaRadioGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group grid gap-150 "
      )}
    >
      <Label>{props.label}</Label>
      <div className="grid gap-150 text-slate-900 text-preset-3">
        {props.children}
      </div>
      <FieldError>{props.errorMessage}</FieldError>
    </AriaRadioGroup>
  );
}

export function Radio({ children, ...props }: RadioProps) {
  return (
    <AriaRadio
      {...props}
      className={composeTailwindRenderProps(props.className, "cursor-pointer")}
    >
      {(renderProps) => (
        <div
          className={twMerge(
            focusRing(renderProps),
            fieldBorderStyles(renderProps),
            renderProps.isSelected && "bg-lime/15 border-lime",
            "border rounded-100 h-12 flex items-center px-200 gap-200"
          )}
        >
          <div
            className={twMerge(
              fieldBorderStyles(renderProps),
              renderProps.isSelected &&
                "border-lime after:content-[''] after:size-3 after:rounded-full after:bg-lime after:block",
              "rounded-full size-5 p-1 border grid place-content-center"
            )}
          />
          {children as ReactNode}
        </div>
      )}
    </AriaRadio>
  );
}
