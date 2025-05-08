import { Component, OnInit } from '@angular/core';
import { Startup } from '../models/startup'; // Adjust the path as necessary
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StartupsService } from '../services/startups.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests
import {
  COUNTRY_MAP,
  INDUSTRY_MAP,
  INVESTMENT_SIZE_MAP,
} from '../utils/lookup'; // Import lookup maps

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ], // Import FormsModule for form handling and MatTableModule for table
  providers: [StartupsService],
  templateUrl: './startups.component.html',
  styleUrl: './startups.component.css',
})
export class StartupsComponent implements OnInit {
  constructor(
    private startupService: StartupsService,
    private router: Router
  ) {}
  // Initialize member as an empty array

  startups?: Startup[] = [];
  COUNTRY_MAP = COUNTRY_MAP; // Expose the mappings to the template
  INDUSTRY_MAP = INDUSTRY_MAP;
  INVESTMENT_SIZE_MAP = INVESTMENT_SIZE_MAP;

  ngOnInit(): void {
    this.startupService.getStartups().subscribe((startup) => {
      console.log('Received startups:', startup);
      this.startups = startup;
    });
  }

  deleteStartup(id: number): void {
    console.log('Deleting startup with ID:', id); // Log ID being passed
    if (confirm('Are you sure you want to delete this startup?')) {
      this.startupService.deleteStartup(id).subscribe(() => {
        this.startups = (this.startups ?? []).filter(
          (startup) => startup.memberId !== id
        );
        console.log(`Startup with ID ${id} deleted.`);
      });
    }
  }

  editStartup(id: number) {
    this.router.navigate(['/edit-startup', id]); // Navigate to the edit member route with the member ID
  }

  createStartup() {
    this.router.navigate(['/add-startup']); // Navigate to the add member route
  }

  trackByMemberId(index: number, item: Startup): number {
    return item.memberId;
  }
}
