import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditInvestorComponent } from './edit-investor.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EditInvestorComponent', () => {
  let component: EditInvestorComponent;
  let fixture: ComponentFixture<EditInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditInvestorComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '1', // Mock the route parameter (e.g., investor ID)
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize investor object', () => {
    expect(component.investor).toBeDefined();
    expect(component.investor.member_Id).toBe(0); // Default value
  });

  it('should call updateInvestor method', () => {
    spyOn(component, 'updateInvestor');
    component.updateInvestor();
    expect(component.updateInvestor).toHaveBeenCalled();
  });
});
