import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Investor } from '../models/investor';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { InvestorsService } from '../services/investors.service';
import { COUNTRY_MAP, INDUSTRY_MAP, INVESTMENT_SIZE_MAP } from '../utils/lookup';

@Component({
  selector: 'app-investors',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.css'],
})
export class InvestorsComponent implements OnInit {
  investors: Investor[] = []; // Initialize the investors array
  COUNTRY_MAP = COUNTRY_MAP; // Expose the mappings to the template
  INDUSTRY_MAP = INDUSTRY_MAP;
  INVESTMENT_SIZE_MAP = INVESTMENT_SIZE_MAP;

  constructor(
    private investorsService: InvestorsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch all investors on component initialization
    this.investorsService.getInvestors().subscribe((investors: Investor[]) => {
      console.log('Received investors:', investors);
      this.investors = investors;
    });
  }

  createInvestor(): void {
    // Navigate to the add investor route
    this.router.navigate(['/add-investor']);
  }

  editInvestor(id: number): void {
    this.router.navigate(['/edit-investor', id]);
  }

  deleteInvestor(id: number): void {
    console.log('Deleting investor with ID:', id);
    if (confirm('Are you sure you want to delete this investor?')) {
      this.investorsService.deleteInvestor(id).subscribe(() => {
        this.investors = this.investors.filter((investor) => investor.id !== id);
        console.log(`Investor with ID ${id} deleted.`);
      });
    }
  }
}
