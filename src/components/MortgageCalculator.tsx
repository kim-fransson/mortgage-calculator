import { FaCalculator } from "react-icons/fa";
import { Form } from "react-aria-components";

import { NumberField, Radio, RadioGroup, Button } from "../ui";

export const MortgageCalculator = () => {
  return (
    <article className="bg-white px-300 py-400 space-y-300">
      <header className="space-y-100">
        <h2 className="text-preset-2 text-slate-900">Mortgage Calculator</h2>
        <Button variant="secondary">Clear all</Button>
      </header>

      <Form className="grid gap-300">
        <NumberField
          isRequired
          name="mortgageAmount"
          label="Mortgage Amount"
          prefix="£"
          minValue={0}
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

        <RadioGroup label="Mortgage Type" isRequired>
          <Radio value="repayment">Repayment</Radio>
          <Radio value="interests">Interests Only</Radio>
        </RadioGroup>

        <Button type="submit">
          <FaCalculator size={24} />
          Calculate Repayments
        </Button>
      </Form>
    </article>
  );
};
