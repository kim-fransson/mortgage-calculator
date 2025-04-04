export function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function focusRing(isFocusVisible?: boolean) {
  return isFocusVisible
    ? "outline-blue-600 outline-offset-2 outline-2"
    : "outline-0";
}

export function fieldBorderStyles(isActive?: boolean, isInvalid?: boolean) {
  if (isInvalid) return "border-red";
  return isActive ? "border-lime" : "border-slate-500";
}
