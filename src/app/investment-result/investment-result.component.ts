import { Component, computed, inject, input } from '@angular/core';
import { InvestmentResult } from '../investment-result.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
    investmentService = inject(InvestmentService);

    resultData = computed(() => this.investmentService.resultData());
    //resultData = this.investmentService.resultData.asReadonly();  //similar to above
}
