import { FaCalculator } from "react-icons/fa";
import { Form } from "react-aria-components";

import { NumberField, Radio, RadioGroup, Button } from "./ui";

function App() {
  return (
    <div className="bg-slate-100 rounded- min-h-svh grid place-items-center font-plus-jakarta-sans">
      <h1 className="sr-only">Mortgage Calculator</h1>
      <main className="rounded-300 self-stretch justify-self-stretch">
        <article className="bg-white px-300 py-400 space-y-300">
          <header className="space-y-100">
            <h2 className="text-preset-2 text-slate-900">
              Mortgage Calculator
            </h2>
            <Button variant="secondary">Clear all</Button>
          </header>

          <Form className="grid gap-300">
            <NumberField label="Mortgage Amount" prefix="£" />
            <NumberField label="Mortgage Term" postfix="years" />
            <NumberField label="Interest Rate" postfix="%" />

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
      </main>
    </div>
  );
}

export default App;
