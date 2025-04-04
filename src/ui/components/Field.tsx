import {
  Label as AriaLabel,
  Input as AriaInput,
  LabelProps,
  InputProps,
  GroupProps,
  Group,
} from "react-aria-components";

import { classNames, fieldBorderStyles, focusRing } from "../../utils";

export const Label = (props: LabelProps) => {
  return (
    <AriaLabel
      {...props}
      className={"text-preset-4 text-slate-700 cursor-pointer"}
    ></AriaLabel>
  );
};

const fieldGroupStyles = (
  isFocusWithin: boolean,
  isInvalid: boolean,
  isFocusVisible: boolean
) => {
  return classNames(
    "group flex border h-12 rounded-100 overflow-hidden",
    fieldBorderStyles(isFocusWithin, isInvalid),
    focusRing(isFocusVisible)
  );
};

export function FieldGroup(props: GroupProps) {
  return (
    <Group
      {...props}
      className={({ isFocusVisible, isInvalid, isFocusWithin }) =>
        fieldGroupStyles(isFocusWithin, isInvalid, isFocusVisible)
      }
    />
  );
}

export function Input(props: InputProps) {
  return (
    <AriaInput
      {...props}
      className={`min-w-0 outline-none flex-1 px-200 text-preset-3 text-slate-900 selection:bg-lime`}
    />
  );
}
