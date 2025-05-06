import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MemberService } from '../services/member.service';
import { Member } from '../models/member';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip'; // Import MatTooltipModule

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Required for template-driven forms
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatTooltipModule, // Add MatTooltipModule to imports
  ],
  template: `
    <form #memberForm="ngForm" (ngSubmit)="addMember()" class="member-form">
      <h2>Add New Member</h2>

      <!-- Member Type -->
      <mat-radio-group
        aria-label="Select member type"
        [(ngModel)]="member.memberType"
        name="memberType"
        required
        matTooltip="Select whether the member is an Investor or a Startup"
      >
        <mat-radio-button value="Investor">Investor</mat-radio-button>
        <mat-radio-button value="Startup">Startup</mat-radio-button>
      </mat-radio-group>
      <mat-error *ngIf="!member.memberType && memberForm.submitted">
        Member type is required.
      </mat-error>

      <!-- Email -->
      <mat-form-field appearance="fill" class="form-field">
        <mat-label>Email</mat-label>
        <input
          matInput
          type="email"
          name="memberEmail"
          [(ngModel)]="member.memberEmail"
          placeholder="example@domain.com"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          matTooltip="Enter a valid email address (e.g., example@domain.com)"
          matTooltipPosition="above"
        />
        <mat-error *ngIf="memberForm.submitted && memberForm.controls['memberEmail']?.invalid">
          <span *ngIf="memberForm.controls['memberEmail']?.errors?.['required']">Email is required.</span>
          <span *ngIf="memberForm.controls['memberEmail']?.errors?.['pattern']">Enter a valid email address.</span>
        </mat-error>
      </mat-form-field>

      <!-- Address -->
      <mat-form-field appearance="fill" class="form-field">
        <mat-label>Address</mat-label>
        <input
          matInput
          type="text"
          name="memberAddress"
          [(ngModel)]="member.memberAddress"
          placeholder="City, Country"
          required
          pattern="^[a-zA-Z\\s,\\'-]+$"
          matTooltip="Enter the address in the format 'City, Country' (e.g., Helsinki, Finland)"
          matTooltipPosition="above"
        />
        <mat-error *ngIf="memberForm.submitted && !member.memberAddress">
          Address is required.
        </mat-error>
        <mat-error *ngIf="memberForm.submitted && member.memberAddress && !member.memberAddress.match('^[a-zA-Z\\s,\\\'-]+$')">
          Address must only contain letters, spaces, commas, hyphens, or apostrophes.
        </mat-error>
      </mat-form-field>

      <!-- Phone -->
      <mat-form-field appearance="fill" class="form-field">
        <mat-label>Phone</mat-label>
        <input
          matInput
          type="text"
          name="memberPhone"
          [(ngModel)]="member.memberPhone"
          placeholder="+123 4567890"
          required
          pattern="^\\+\\d{1,3}\\s\\d{4,14}$"
          matTooltip="Enter the phone number in the format '+123 4567890' (e.g., +1 234567890)"
          matTooltipPosition="above"
        />
        <mat-error *ngIf="memberForm.submitted && !member.memberPhone">
          Phone number is required.
        </mat-error>
        <mat-error *ngIf="memberForm.submitted && member.memberPhone && !member.memberPhone.match('^\\+\\d{1,3}\\s\\d{4,14}$')">
          Enter a valid phone number (e.g., +123 4567890).
        </mat-error>
      </mat-form-field>

      <!-- Submit Button -->
      <button
        mat-raised-button
        color="primary"
        type="submit"
        [disabled]="memberForm.invalid"
      >
        Add Member
      </button>
    </form>
  `,
  styleUrls: ['./add-member.component.css'],
})
export class AddMemberComponent {
  member: Member = {
    memberId: 0,
    memberType: 'Investor',
    memberEmail: '',
    memberAddress: '',
    memberPhone: '',
  };

  constructor(private memberService: MemberService, private router: Router) {}

  addMember() {
    if (this.member.memberType && this.member.memberEmail && this.member.memberAddress && this.member.memberPhone) {
      console.log('Form Submitted:', this.member); // Debugging statement
      this.memberService.addMember(this.member).subscribe(
        (response) => {
          console.log('Member added successfully:', response);
          this.router.navigate(['/members']); // Redirect to the members list
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
