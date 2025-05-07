import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InvestorsService } from '../services/investors.service';
import { Investor } from '../models/investor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-investor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
  ],
  templateUrl: './add-investor.component.html',
  styleUrls: ['./add-investor.component.css'],
})
export class AddInvestorComponent {
  investor: Investor = {
    name_Investor: '',
    overview_Investor: '',
    country_Id: 0,
    industry_Id: 0,
    investment_Size_Id: 0,
  };

  constructor(
    private investorsService: InvestorsService,
    private router: Router
  ) {}

  addInvestor(): void {
    if (
      this.investor.name_Investor &&
      this.investor.overview_Investor &&
      this.investor.country_Id &&
      this.investor.industry_Id &&
      this.investor.investment_Size_Id
    ) {
      this.investorsService.addInvestor(this.investor).subscribe(
        (response) => {
          console.log('Investor added successfully:', response);
          this.router.navigate(['/investors']); // Redirect to the investors list
        },
        (error) => {
          console.error('Error adding investor:', error);
        }
      );
    } else {
      console.error('Form is invalid. Please fill out all required fields.');
    }
  }
}