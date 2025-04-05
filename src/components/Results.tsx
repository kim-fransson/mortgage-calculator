import illustrationEmpty from "../assets/illustration-empty.svg";
import { classNames } from "../utils";

export type Repayments = {
  monthlyPayment: number;
  totalRepayment: number;
};

interface ResultsProps {
  repayments: Repayments | null;
}

export const Results = ({ repayments }: ResultsProps) => {
  return (
    <article
      className={classNames(
        "grid bg-slate-900 px-300 py-400",
        "md:p-500",
        "lg:rounded-bl-[80px]"
      )}
    >
      {repayments ? (
        <div>{JSON.stringify(repayments)}</div>
      ) : (
        <div className="grid place-items-center place-content-center gap-300">
          <img src={illustrationEmpty} width={192} height={192} />
          <h2 className="text-center text-white text-preset-2">
            Results shown here
          </h2>
          <p className="text-center text-slate-300 text-preset-4">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
    </article>
  );
};
