import { Routes } from '@angular/router';
import { NgModel } from '@angular/forms';
import { MemberComponent } from './member/member.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { StartupsComponent } from './startups/startups.component';

export const routes: Routes = [
  { path: 'member', component: MemberComponent },
  { path: '', component: HomepageComponent },
  { path: 'edit-member/:id', component: EditMemberComponent },
  { path: 'add-member', component: AddMemberComponent },
  { path: 'startups', component: StartupsComponent },
  { path: '**', redirectTo: '' },
];
