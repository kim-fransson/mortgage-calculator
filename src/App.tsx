import { MortgageCalculator, Results } from "./components";

function App() {
  return (
    <div className="bg-slate-100 rounded- min-h-svh grid place-items-center font-plus-jakarta-sans">
      <h1 className="sr-only">Mortgage Calculator</h1>
      <main className="rounded-300 self-stretch justify-self-stretch">
        <MortgageCalculator />
        <Results />
      </main>
    </div>
  );
}

export default App;
