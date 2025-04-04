import {
  NumberField as AriaNumberField,
  NumberFieldProps as AriaNumberFieldProps,
  FieldError,
  ValidationResult,
} from "react-aria-components";

import { FieldGroup, Label, Input } from "./Field";
import { classNames } from "../../utils";

interface NumberFieldProps extends AriaNumberFieldProps {
  label?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  postfix?: string;
  prefix?: string;
}

export const NumberField = ({
  label,
  errorMessage,
  prefix,
  postfix,
  ...props
}: NumberFieldProps) => {
  return (
    <AriaNumberField {...props} className={"grid gap-150"}>
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
      className={classNames(
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
