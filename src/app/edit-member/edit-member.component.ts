import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../models/member';
import { MemberService } from '../services/member.service';
import { MemberComponent } from '../member/member.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule for form handling
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
// Adjust the path as necessary

@Component({
  selector: 'app-edit-member',
  standalone: true,
  imports: [FormsModule, CommonModule, MemberComponent],
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
