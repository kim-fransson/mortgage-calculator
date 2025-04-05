import { MortgageCalculator, Results } from "./components";
import { classNames } from "./utils";

function App() {
  return (
    <div
      className={classNames(
        "min-h-svh grid font-plus-jakarta-sans",
        "md:py-500"
      )}
    >
      <h1 className="sr-only">Mortgage Calculator</h1>
      <main
        className={classNames(
          "rounded-300 self-stretch justify-self-stretch overflow-hidden",
          "md:max-w-2xl md:self-center md:justify-self-center"
        )}
      >
        <MortgageCalculator />
        <Results />
      </main>
    </div>
  );
}

export default App;
