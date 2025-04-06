import { useState } from "react";
import { MortgageCalculator, Results } from "./components";
import { calculateRepayments, MortgageFormData, Repayments } from "./mortgage";
import { classNames } from "./utils";

function App() {
  const [repayments, setRepayments] = useState<Repayments | null>(null);

  const handleCalculate = (data: MortgageFormData) => {
    const result = calculateRepayments(data);
    setRepayments(result);
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
