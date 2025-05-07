import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-add-investor',
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
  templateUrl: './add-investor.component.html',
  styleUrls: ['./add-investor.component.css'],
})
export class AddInvestorComponent implements OnInit {
  investor: Investor = {
    member_Id: 0, // This will be dynamically assigned or ignored
    name_Investor: '',
    overview_Investor: '',
    country_Id: 0,
    industry_Id: 0,
    investment_Size_Id: 0,
  };

  constructor(
    private router: Router,
    private investorsService: InvestorsService
  ) {}

  ngOnInit(): void {
    // Fetch the next available member_Id when the component initializes
    this.investorsService.getNextMemberId().subscribe(
      (nextMemberId: number) => {
        this.investor.member_Id = nextMemberId;
        console.log('Next available member_Id:', nextMemberId);
      },
      (error: any) => {
        console.error('Error fetching next member_Id:', error);
      }
    );
  }

  addInvestor() {
    if (
      this.investor.name_Investor &&
      this.investor.overview_Investor &&
      this.investor.country_Id &&
      this.investor.industry_Id &&
      this.investor.investment_Size_Id
    ) {
      // Prepare the investor object for submission
      const { member_Id, ...newInvestor } = this.investor; // Exclude member_Id if backend generates it

      console.log('Form Submitted:', newInvestor); // Debugging statement
      this.investorsService.addInvestor(newInvestor).subscribe(
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