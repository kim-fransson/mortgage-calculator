import {
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  ValidationResult,
} from "react-aria-components";

import { FieldGroup, Label, Input, FieldError } from "./Field";
import { classNames } from "../../utils";

interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  postfix?: string;
  prefix?: string;
  className?: string;
}

export const NumberField = ({
  label,
  errorMessage,
  prefix,
  postfix,
  className,
  ...props
}: NumberFieldProps) => {
  return (
    <AriaNumberField
      {...props}
      className={classNames(className, "grid gap-150")}
    >
      <Label>{label}</Label>
      <FieldGroup>
        {({ isFocusVisible, isFocusWithin, isInvalid }) => (
          <>
            {prefix && (
              <FieldFix
                isFocusVisible={isFocusVisible}
                isFocusWithin={isFocusWithin}
                isInvalid={isInvalid}
                value={prefix}
              />
            )}
            <Input />
            {postfix && (
              <FieldFix
                isFocusVisible={isFocusVisible}
                isFocusWithin={isFocusWithin}
                isInvalid={isInvalid}
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
  isInvalid?: boolean;
  value: string;
}

const FieldFix = ({
  isFocusVisible,
  isFocusWithin,
  isInvalid,
  value,
}: FieldFixProps) => {
  return (
    <div
      className={classNames(
        "text-center text-preset-3 px-200 py-150",
        isInvalid
          ? "bg-red text-white"
          : isFocusVisible || isFocusWithin
          ? "bg-lime text-slate-900"
          : "bg-slate-100 text-slate-700"
      )}
    >
      {value}
    </div>
  );
};
