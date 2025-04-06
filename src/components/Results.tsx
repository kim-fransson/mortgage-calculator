import { Separator } from "react-aria-components";
import illustrationEmpty from "../assets/illustration-empty.svg";
import { formatter, Repayments } from "../mortgage";
import { classNames } from "../utils";

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
        <div className="grid place-content-start gap-300">
          <h2 className="text-white text-preset-2">Your results</h2>
          <p className="text-preset-4 text-slate-300">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>

          <div
            className={classNames(
              "bg-black/25 border-t-lime border-t-4 rounded-lg px-200 py-300 space-y-200",
              "md:mt-300 md:space-y-400 md:p-400"
            )}
          >
            <div className="space-y-100">
              <h3 className="text-preset-4 text-slate-300">
                Your monthly repayments
              </h3>
              <span className="text-preset-1 text-lime">
                {formatter.format(repayments.monthlyPayment)}
              </span>
            </div>

            <Separator className="text-[#9ABED5]/25 my-200" />

            <div className="space-y-100">
              <h3 className="text-preset-4 text-slate-300">
                Total you'll repay over the term
              </h3>
              <span className="text-preset-2 text-white">
                {formatter.format(repayments.totalRepayment)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <NoResults />
      )}
    </article>
  );
};

const NoResults = () => {
  return (
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
  );
};
