import {
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  FieldError,
  ValidationResult,
} from "react-aria-components";
import { twJoin } from "tailwind-merge";

import { FieldGroup, Label, Input } from "./Field";

import { composeTailwindRenderProps } from "../../utils";

interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  postfix?: string;
  prefix?: string;
}

export const NumberField = ({
  className,
  label,
  errorMessage,
  prefix,
  postfix,
  ...props
}: NumberFieldProps) => {
  return (
    <AriaNumberField
      {...props}
      className={composeTailwindRenderProps(className, "grid gap-150")}
    >
      <Label>{label}</Label>
      <FieldGroup>
        {({ isFocusVisible, isFocusWithin }) => (
          <>
            {prefix && (
              <FieldFix
                isFocusVisible={isFocusVisible}
                isFocusWithin={isFocusWithin}
                value={prefix}
              />
            )}
            <Input />
            {postfix && (
              <FieldFix
                isFocusVisible={isFocusVisible}
                isFocusWithin={isFocusWithin}
                value={postfix}
              />
            )}
          </>
        )}
      </FieldGroup>
      <FieldError>{errorMessage}</FieldError>
    </AriaNumberField>
  );
};

interface FieldFixProps {
  isFocusVisible?: boolean;
  isFocusWithin?: boolean;
  value: string;
}

const FieldFix = ({ isFocusVisible, isFocusWithin, value }: FieldFixProps) => {
  return (
    <div
      className={twJoin(
        "text-center text-preset-3 px-200 py-150",
        isFocusVisible || isFocusWithin
          ? "bg-lime text-slate-900"
          : "bg-slate-100 text-slate-700"
      )}
    >
      {value}
    </div>
  );
};
