import { Component, OnInit } from '@angular/core';
import { Startup } from '../models/startup'; // Adjust the path as necessary
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StartupsService } from '../services/startups.service';

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
  ngOnInit(): void {
    this.startupService.getStartups().subscribe((startup) => {
      console.log('Received startups:', startup); // 👈 Add this
      this.startups = startup;
    });
  }

  deleteStartup(id: number): void {
    if (confirm('Are you sure you want to delete this member?')) {
      this.startupService.deleteStartup(id).subscribe(() => {
        this.startups = (this.startups ?? []).filter(
          (startup) => startup.MemberId !== id
        );
        console.log(`Member with ID ${id} deleted.`);
      });
    }
  }

  editStartup(id: number) {
    this.router.navigate(['/edit-startup', id]); // Navigate to the edit member route with the member ID
  }

  createStartup() {
    this.router.navigate(['/add-startup']); // Navigate to the add member route
  }
}
