import { Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { StartupsComponent } from './startups/startups.component';
import { AddStartupComponent } from './add-startup/add-startup.component';
import { EditStartupComponent } from './edit-startup/edit-startup.component';
import { InvestorsComponent } from './investors/investors.component';
import { EditInvestorComponent } from './edit-investor/edit-investor.component';
import { AddInvestorComponent } from './add-investor/add-investor.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent }, // Default route
  { path: 'member', component: MemberComponent },
  { path: 'edit-member/:id', component: EditMemberComponent },
  { path: 'add-member', component: AddMemberComponent },
  { path: 'startups', component: StartupsComponent },
  { path: 'add-startup', component: AddStartupComponent },
  { path: 'edit-startup/:id', component: EditStartupComponent },
  { path: 'investors', component: InvestorsComponent }, // Investors Dashboard
  { path: 'add-investor', component: AddInvestorComponent }, // Add Investor
  { path: 'edit-investor/:id', component: EditInvestorComponent }, // Edit Investor
  { path: '**', redirectTo: '' }, // Wildcard route to redirect to homepage
];
