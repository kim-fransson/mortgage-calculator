import { ReactNode } from "react";
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  RadioProps,
  ValidationResult,
} from "react-aria-components";
import { Label, FieldError } from "./Field";
import { classNames, fieldBorderStyles, focusRing } from "../../utils";

export interface RadioGroupProps extends Omit<AriaRadioGroupProps, "children"> {
  label?: string;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  className?: string;
}

export function RadioGroup(props: RadioGroupProps) {
  return (
    <AriaRadioGroup
      {...props}
      className={classNames(props.className, "group grid gap-150")}
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
    <AriaRadio {...props} className={"cursor-pointer"}>
      {({ isFocusVisible, isInvalid, isSelected }) => (
        <div
          className={classNames(
            focusRing(isFocusVisible),
            fieldBorderStyles(isSelected, isInvalid),
            isSelected ? "bg-lime/15 border-lime" : "bg-transparent",
            "border rounded-100 h-12 flex items-center px-200 gap-200"
          )}
        >
          <div
            className={classNames(
              fieldBorderStyles(isSelected, isInvalid),
              isSelected &&
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
