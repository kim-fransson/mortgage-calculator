import { tv } from "tailwind-variants";

export const focusRing = tv({
  base: "outline outline-lime outline-offset-2",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2",
    },
  },
});

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false: "border-slate-500",
      true: "border-lime",
    },
    isInvalid: {
      true: "border-red",
    },
  },
});
