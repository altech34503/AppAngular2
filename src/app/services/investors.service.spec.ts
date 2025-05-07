import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { InvestorsService } from './investors.service'; // Import the correct service

describe('InvestorsService', () => {
  let service: InvestorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule for HTTP testing
      providers: [InvestorsService], // Provide the InvestorsService
    });
    service = TestBed.inject(InvestorsService); // Inject the InvestorsService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
