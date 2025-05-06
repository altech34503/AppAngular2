import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio'; // Import MatRadioModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { AddMemberComponent } from './add-member/add-member.component';

@NgModule({
  declarations: [], // Don't declare AddMemberComponent here as we're using standalone components
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatRadioModule, // Add MatRadioModule here
    MatFormFieldModule, // Add MatFormFieldModule here
    MatInputModule, // Add MatInputModule here
    MatButtonModule, // Add MatButtonModule here
  ],
  bootstrap: [], // Bootstrap AddMemberComponent
})
export class AppModule {}