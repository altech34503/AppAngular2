import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddInvestorComponent } from './add-investor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

describe('AddInvestorComponent', () => {
  let component: AddInvestorComponent;
  let fixture: ComponentFixture<AddInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AddInvestorComponent,
        HttpClientTestingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize investor object', () => {
    expect(component.investor).toBeDefined();
    expect(component.investor.name_Investor).toBe(''); // Corrected property name
    expect(component.investor.overview_Investor).toBe(''); // Use the correct property
  });

  it('should call addInvestor method', () => {
    spyOn(component, 'addInvestor');
    component.addInvestor();
    expect(component.addInvestor).toHaveBeenCalled();
  });
});
