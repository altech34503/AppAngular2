import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InvestorsService } from '../services/investors.service';
import { Investor } from '../models/investor';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-edit-investor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Required for template-driven forms
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
  ],
  templateUrl: './edit-investor.component.html',
  styleUrls: ['./edit-investor.component.css'],
})
export class EditInvestorComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private investorsService: InvestorsService
  ) {}

  // Initialize investor object
  investor: Investor = {
    member_Id: 0,
    name_Investor: '',
    overview_Investor: '',
    country_Id: 0,
    industry_Id: 0,
    investment_Size_Id: 0,
  };

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.investorsService.getInvestorById(id).subscribe(
        (response) => {
          this.investor = response;
          console.log('Investor loaded:', this.investor); // Debugging statement
        },
        (error) => {
          console.error('Error loading investor:', error);
        }
      );
    }
  }

  updateInvestor() {
    if (
      this.investor.name_Investor &&
      this.investor.overview_Investor &&
      this.investor.country_Id &&
      this.investor.industry_Id &&
      this.investor.investment_Size_Id
    ) {
      console.log('Form Submitted:', this.investor); // Debugging statement
      this.investorsService.updateInvestor(this.investor).subscribe(
        (response) => {
          console.log('Investor updated successfully:', response);
          this.router.navigate(['/investors']); // Redirect to the investors list
        },
        (error) => {
          console.error('Error updating investor:', error);
        }
      );
    } else {
      console.error('Form is invalid. Please fill out all required fields.');
    }
  }
}
