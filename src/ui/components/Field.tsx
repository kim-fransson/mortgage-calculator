import {
  Label as AriaLabel,
  Input as AriaInput,
  LabelProps,
  InputProps,
  GroupProps,
  Group,
  composeRenderProps,
} from "react-aria-components";
import { twJoin } from "tailwind-merge";
import { tv } from "tailwind-variants";

import { fieldBorderStyles, focusRing } from "../../styles";
import { composeTailwindRenderProps } from "../../utils";

export const Label = (props: LabelProps) => {
  return (
    <AriaLabel
      {...props}
      className={twJoin(
        props.className,
        "text-preset-4 text-slate-700 cursor-pointer"
      )}
    ></AriaLabel>
  );
};

const fieldGroupStyles = tv({
  extend: focusRing,
  base: "group flex border border-slate-500 h-12 rounded-100 overflow-hidden",
  variants: fieldBorderStyles.variants,
});

export function FieldGroup(props: GroupProps) {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        fieldGroupStyles({ ...renderProps, className })
      )}
    />
  );
}

export function Input(props: InputProps) {
  return (
    <AriaInput
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        `min-w-0 outline-none flex-1 px-200 text-preset-3 text-slate-900 selection:bg-lime`
      )}
    />
  );
}
