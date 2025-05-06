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
  templateUrl: './add-member.component.html',
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
