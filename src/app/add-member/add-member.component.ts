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

@Component({
  selector: 'app-add-member',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
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
      >
        <mat-radio-button value="Investor">Investor</mat-radio-button>
        <mat-radio-button value="Startup">Startup</mat-radio-button>
      </mat-radio-group>

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
        />
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
        />
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
        />
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
  styleUrl: './add-member.component.css',
})
export class AddMemberComponent {
  member: Member = {
    memberId: 0,
    memberType: 'Startup',
    memberEmail: '',
    memberAddress: '',
    memberPhone: '',
  };

  constructor(private memberService: MemberService, private router: Router) {}

  addMember() {
    this.memberService.addMember(this.member).subscribe(() => {
      this.router.navigate(['/members']);
    });
  }
}
