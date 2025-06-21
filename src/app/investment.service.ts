import { Injectable, signal } from "@angular/core";
import { InvestmentResult } from "./investment-result.model";
import { InvestmentInput } from "./investment-input.model";

@Injectable({providedIn: 'root'})
export class InvestmentService {
    resultData = signal<Array<InvestmentResult>>([]);
    
    calculateInvestmentResults(data:InvestmentInput) {
        const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
        const annualData = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
        annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
        });
        }
        console.log('Investment Results:', annualData);
        this.resultData.set(annualData);
  }
}