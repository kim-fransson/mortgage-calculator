import { FaCalculator } from "react-icons/fa";
import { Form } from "react-aria-components";

import { NumberField, Radio, RadioGroup, Button } from "../ui";
import { classNames } from "../utils";
import { FormEvent, useRef } from "react";
import { MortgageFormData, MortgageType } from "../types";

interface MortgageCalculatorProps {
  className?: string;
  onClear?: () => void;
  onCalculate?: (data: MortgageFormData) => void;
}

export const MortgageCalculator = ({
  className,
  onClear,
  onCalculate,
}: MortgageCalculatorProps) => {
  const form = useRef<HTMLFormElement>(null);

  const handleCalculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<
      string,
      string
    >;

    const mortgageData: MortgageFormData = {
      mortgageAmount: Number.parseFloat(data.mortgageAmount),
      mortgageTerm: Number.parseInt(data.mortgageTerm),
      interestRate: Number.parseFloat(data.interestRate),
      mortgageType: data.mortgageType as MortgageType,
    };

    if (onCalculate) {
      onCalculate(mortgageData);
    }
  };

  const handleClear = () => {
    if (onClear) {
      onClear();
    }

    if (form && form.current) {
      form.current.reset();
    }
  };

  return (
    <article
      className={classNames(
        className,
        "bg-white px-300 py-400 space-y-300",
        "md:px-400 md:space-y-400",
        "lg:space-x-500"
      )}
    >
      <header
        className={classNames(
          "flex flex-col gap-100 items-start",
          "md:flex-row md:items-center md:justify-between"
        )}
      >
        <h2 className="text-preset-2 text-slate-900">Mortgage Calculator</h2>
        <Button onPress={handleClear} variant="secondary">
          Clear all
        </Button>
      </header>

      <Form
        ref={form}
        onSubmit={handleCalculate}
        className={classNames("grid gap-300", "md:grid-cols-2")}
      >
        <NumberField
          isRequired
          name="mortgageAmount"
          label="Mortgage Amount"
          prefix="£"
          minValue={0}
          className="md:col-span-full"
        />
        <NumberField
          isRequired
          name="mortgageTerm"
          label="Mortgage Term"
          postfix="years"
          minValue={0}
          maxValue={99}
        />
        <NumberField
          isRequired
          name="interestRate"
          label="Interest Rate"
          postfix="%"
          minValue={0}
          maxValue={100}
        />

        <RadioGroup
          className="md:col-span-full"
          label="Mortgage Type"
          name="mortgageType"
          isRequired
        >
          <Radio value="repayment">Repayment</Radio>
          <Radio value="interests">Interests Only</Radio>
        </RadioGroup>

        <Button
          type="submit"
          className="md:mt-200 lg:col-span-full lg:max-w-xs lg:mt-0"
        >
          <FaCalculator size={24} className="shrink-0" />
          Calculate Repayments
        </Button>
      </Form>
    </article>
  );
};
