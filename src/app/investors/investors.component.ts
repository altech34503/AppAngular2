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

  constructor(
    private investorsService: InvestorsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch all investors on component initialization
    this.investorsService.getInvestors().subscribe((investors: Investor[]) => {
      console.log('Received investors:', investors);
      this.investors = investors.map((investor) => {
        // Ensure member_Id is assigned
        if (!investor.member_Id) {
          this.fetchMemberIdForInvestor(investor);
        }
        return investor;
      });
    });
  }

  fetchMemberIdForInvestor(investor: Investor): void {
    this.investorsService.getNextMemberId().subscribe(
      (nextMemberId: number) => {
        investor.member_Id = nextMemberId;
        console.log(`Assigned member_Id ${nextMemberId} to investor`, investor);
      },
      (error: any) => {
        console.error('Error fetching next member_Id:', error);
      }
    );
  }

  createInvestor(): void {
    // Navigate to the add investor route
    this.router.navigate(['/add-investor']);
  }

  editInvestor(memberId: number | undefined): void {
    if (memberId === undefined) {
      console.error('Cannot edit investor: member_Id is undefined');
      return;
    }
    this.router.navigate(['/edit-investor', memberId]);
  }

  deleteInvestor(memberId: number | undefined): void {
    if (memberId === undefined) {
      console.error('Cannot delete investor: member_Id is undefined');
      return;
    }
    console.log('Deleting investor with ID:', memberId);
    if (confirm('Are you sure you want to delete this investor?')) {
      this.investorsService.deleteInvestor(memberId).subscribe(() => {
        this.investors = this.investors.filter(
          (investor) => investor.member_Id !== memberId
        );
        console.log(`Investor with ID ${memberId} deleted.`);
      });
    }
  }

  trackByMemberId(index: number, item: Investor): number {
    return item.member_Id ?? index; // Use index as fallback if member_Id is undefined
  }
}
