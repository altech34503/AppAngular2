import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StartupsService } from '../services/startups.service';
import { Startup } from '../models/startup'; // Ensure this model exists
import { NgForm } from '@angular/forms'; // For handling forms
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MemberService } from '../services/member.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { COUNTRIES } from '../utils/countries';
import { INDUSTRIES } from '../utils/industries';
import { INVESTMENT_SIZE } from '../utils/investment-sizes';
@Component({
  selector: 'app-edit-startup',
  templateUrl: './edit-startup.component.html',
  styleUrls: ['./edit-startup.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
  ],
})
export class EditStartupComponent implements OnInit {
  @Input() id!: number; // Input property to receive the startup ID
  startup: any = {}; // Initialize startup as an empty object
  countries = COUNTRIES; // Use the imported list of countries
  industries = INDUSTRIES; // Use the imported list of industries
  investments = INVESTMENT_SIZE; // Use the imported list of investment sizes

  constructor(
    private startupService: StartupsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.startupService.getStartup(this.id).subscribe((startup) => {
      this.startup = startup;
    });
  }

  updateStartup(startupForm: NgForm) {
    if (startupForm.invalid) {
      console.warn('Form is invalid');
      return;
    }

    this.startupService.updateStartup(this.startup).subscribe(() => {
      this.router.navigate(['/startups']); // Navigate back to the list of startups
    });
  }
}
