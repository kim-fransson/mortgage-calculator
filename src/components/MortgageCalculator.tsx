import { FaCalculator } from "react-icons/fa";
import { Form } from "react-aria-components";

import { NumberField, Radio, RadioGroup, Button } from "../ui";
import { classNames } from "../utils";

export const MortgageCalculator = () => {
  return (
    <article
      className={classNames(
        "bg-white px-300 py-400 space-y-300",
        "md:px-400 md:space-y-400"
      )}
    >
      <header
        className={classNames(
          "flex flex-col gap-100 items-start",
          "md:flex-row md:items-center md:justify-between"
        )}
      >
        <h2 className="text-preset-2 text-slate-900">Mortgage Calculator</h2>
        <Button variant="secondary">Clear all</Button>
      </header>

      <Form className={classNames("grid gap-300", "md:grid-cols-2")}>
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
          isRequired
        >
          <Radio value="repayment">Repayment</Radio>
          <Radio value="interests">Interests Only</Radio>
        </RadioGroup>

        <Button type="submit" className="md:mt-200">
          <FaCalculator size={24} />
          Calculate Repayments
        </Button>
      </Form>
    </article>
  );
};
