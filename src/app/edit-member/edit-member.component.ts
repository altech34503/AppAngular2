import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { MemberService } from '../services/member.service';
import { MemberComponent } from '../member/member.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for form handling
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input'; // For matInput
import { MatRadioModule } from '@angular/material/radio'; // For mat-radio-button
import { MatFormFieldModule } from '@angular/material/form-field'; // For mat-form-field
import { MatCardModule } from '@angular/material/card'; // For mat-card
import { MatButtonModule } from '@angular/material/button'; // For mat-raised-button
import { MatIconModule } from '@angular/material/icon'; // For optional icons or custom styling (optional)
import { MatTooltipModule } from '@angular/material/tooltip'; // For tooltips (optional)

// Adjust the path as necessary

@Component({
  selector: 'app-edit-member',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MemberComponent,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './edit-member.component.html',
  styleUrl: './edit-member.component.css',
})
export class EditMemberComponent {
  @Input() id!: number; // Input property to receive the member ID
  member!: Member;
  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit() {
    this.memberService.getMember(this.id).subscribe((member) => {
      this.member = member;
    });
  }

  updateMember() {
    this.memberService.updateMember(this.member).subscribe(() => {
      this.router.navigate(['/member']); // Adjust the route as necessary
    });
    // Optionally, navigate back to the member list or show a success message
  }
}
