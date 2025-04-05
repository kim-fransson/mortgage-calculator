import {
  MortgageCalculator,
  MortgageFormData,
  Repayments,
  Results,
} from "./components";
import { classNames } from "./utils";
import { useState } from "react";

function App() {
  const [repayments, setRepayments] = useState<Repayments | null>(null);

  const handleCalculate = (data: MortgageFormData) => {
    const { mortgageAmount, mortgageTerm, interestRate, mortgageType } = data;

    const termInMonths = mortgageTerm * 12;
    const monthlyInterestRate = interestRate / 100 / 12;

    let monthlyPayment: number;
    let totalRepayment: number;

    if (mortgageType === "repayment") {
      monthlyPayment =
        (mortgageAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -termInMonths));

      totalRepayment = monthlyPayment * termInMonths;
    } else {
      monthlyPayment = mortgageAmount * monthlyInterestRate;
      totalRepayment = monthlyPayment * termInMonths + mortgageAmount;
    }

    setRepayments({
      monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
      totalRepayment: parseFloat(totalRepayment.toFixed(2)),
    });
  };

  const handleClear = () => {
    setRepayments(null);
  };

  return (
    <div
      className={classNames(
        "min-h-svh grid font-plus-jakarta-sans auto-rows-min",
        "md:py-500 md:auto-rows-auto"
      )}
    >
      <h1 className="sr-only">Mortgage Calculator</h1>
      <main
        className={classNames(
          "grid overflow-hidden bg-white auto-rows-min",
          "md:rounded-300 md:max-w-2xl md:self-center md:justify-self-center",
          "lg:grid-cols-2 lg:max-w-5xl"
        )}
      >
        <MortgageCalculator
          onClear={handleClear}
          onCalculate={handleCalculate}
        />
        <Results repayments={repayments} />
      </main>
    </div>
  );
}

export default App;
