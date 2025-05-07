import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StartupsService } from '../services/startups.service';
import { Startup } from '../models/startup';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatLabel } from '@angular/material/form-field';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-add-startup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Required for template-driven forms
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatOptionModule,
    MatLabel,
    MatSelect,
    MatTooltipModule, // Add MatTooltipModule to imports
  ],
  templateUrl: './add-startup.component.html',
  styleUrl: './add-startup.component.css',
})
export class AddStartupComponent {
  constructor(
    private router: Router,
    private startupService: StartupsService
  ) {}

  // Initialize member as an empty array
  startup: Startup = {
    memberId: 0,
    nameStartup: '',
    overviewStartup: '',
    countryId: 0,
    industryId: 0,
    investmentSizeId: 0,
  };

  addStartup() {
    if (
      this.startup.nameStartup &&
      this.startup.overviewStartup &&
      this.startup.countryId &&
      this.startup.industryId &&
      this.startup.investmentSizeId
    ) {
      console.log('Form Submitted:', this.startup); // Debugging statement
      this.startupService.addStartup(this.startup).subscribe(
        (response) => {
          console.log('Member added successfully:', response);
          this.router.navigate(['/startups']); // Redirect to the members list
        },
        (error) => {
          console.error('Error adding member:', error);
        }
      );
    } else {
      console.error('Form is invalid. Please fill out all required fields.');
    }
  }
}
