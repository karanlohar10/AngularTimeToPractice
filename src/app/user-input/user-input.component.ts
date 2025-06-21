import { Component,inject,Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment: Signal<number> = signal(10000);
  enteredAnnualInvestment: Signal<number> = signal(100000);
  enteredExpectedReturn: Signal<number> = signal(12);
  enteredDuration: Signal<number> = signal(5);

  investmentService = inject(InvestmentService);

  onSubmit(){
    console.log('Form submitted');

    console.log('Initial Investment:', this.enteredInitialInvestment());
    console.log('Annual Investment:', this.enteredAnnualInvestment());
    console.log('Expected Return:', this.enteredExpectedReturn());
    console.log('Duration:', this.enteredDuration());

    this.investmentService.calculateInvestmentResults({initialInvestment: this.enteredInitialInvestment() || 0,
      annualInvestment: this.enteredAnnualInvestment(),
      expectedReturn: this.enteredExpectedReturn(),
      duration: this.enteredDuration()
    });
  }
}
