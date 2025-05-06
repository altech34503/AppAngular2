import { Component } from '@angular/core';
import { Member } from '../models/member'; // Adjust the path as necessary
import { MemberService } from '../services/member.service'; // Adjust the path as necessary
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router for navigation
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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
  providers: [MemberService],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css',
})
export class MemberComponent {
  constructor(private memberService: MemberService, private router: Router) {}
  // Initialize member as an empty array

  members?: Member[] = [];
  ngOnInit(): void {
    this.memberService.getMembers().subscribe((members) => {
      this.members = members;
    });
  }

  deleteMember(id: number): void {
    if (confirm('Are you sure you want to delete this member?')) {
      this.memberService.deleteMember(id).subscribe(() => {
        this.members = (this.members ?? []).filter(
          (member) => member.memberId !== id
        );
        console.log(`Member with ID ${id} deleted.`);
      });
    }
  }

  editMember(id: number) {
    this.router.navigate(['/edit-member', id]); // Navigate to the edit member route with the member ID
  }

  createMember() {
    this.router.navigate(['/add-member']); // Navigate to the add member route
  }
}
