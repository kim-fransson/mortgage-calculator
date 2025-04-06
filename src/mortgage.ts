export type MortgageType = "repayment" | "interests";

export interface MortgageFormData {
  mortgageAmount: number;
  mortgageTerm: number; // in years
  interestRate: number; // annual percentage
  mortgageType: MortgageType;
}

export interface Repayments {
  monthlyPayment: number;
  totalRepayment: number;
}

export function calculateRepayments(data: MortgageFormData): Repayments {
  const { mortgageAmount, mortgageTerm, interestRate, mortgageType } = data;

  const termInMonths = mortgageTerm * 12;
  const monthlyInterestRate = interestRate / 100 / 12;

  let monthlyPayment: number;
  let totalRepayment: number;

  if (mortgageType === "repayment") {
    // Standard amortization formula
    monthlyPayment =
      (mortgageAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -termInMonths));

    totalRepayment = monthlyPayment * termInMonths;
  } else {
    // Interest-only mortgage
    monthlyPayment = mortgageAmount * monthlyInterestRate;
    totalRepayment = monthlyPayment * termInMonths + mortgageAmount;
  }

  return {
    monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
    totalRepayment: parseFloat(totalRepayment.toFixed(2)),
  };
}

export const formatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});
