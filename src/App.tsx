import { MortgageCalculator, Results } from "./components";
import { classNames } from "./utils";

function App() {
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
        <MortgageCalculator />
        <Results />
      </main>
    </div>
  );
}

export default App;
