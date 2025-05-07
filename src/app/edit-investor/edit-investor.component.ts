import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestorsService } from '../services/investors.service';
import { Investor } from '../models/investor';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
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
  investor: Investor = {
    id: 0, // Default value for id
    name_Investor: '',
    overview_Investor: '',
    country_Id: 0,
    industry_Id: 0,
    investment_Size_Id: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private investorsService: InvestorsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Retrieved id from route:', id); // Debugging statement

    if (isNaN(id) || id <= 0) {
      console.error('Invalid id provided in the route.');
      this.router.navigate(['/investors']); // Redirect to the investors list
      return;
    }

    this.investorsService.getInvestorById(id).subscribe(
      (response) => {
        this.investor = response; // Populate the investor object
        console.log('Investor loaded:', this.investor); // Debugging statement
      },
      (error) => {
        console.error('Error loading investor:', error);
      }
    );
  }

  updateInvestor(): void {
    if (this.investor.id) {
      console.log('Payload being sent:', this.investor); // Debugging log
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
      console.error('Cannot update investor: ID is missing.');
    }
  }
}
