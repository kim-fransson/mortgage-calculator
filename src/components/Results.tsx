import illustrationEmpty from "../assets/illustration-empty.svg";
import { classNames } from "../utils";

export const Results = () => {
  return (
    <article
      className={classNames(
        "grid bg-slate-900 px-300 py-400 gap-300 justify-items-center",
        "md:p-500 md:gap-500"
      )}
    >
      <img src={illustrationEmpty} width={192} height={192} />
      <h2 className="text-center text-white text-preset-2">
        Results shown here
      </h2>
      <p className="text-center text-slate-300 text-preset-4">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </article>
  );
};
