import { TestBed } from '@angular/core/testing';

import { CalAguaService } from './cal-agua.service';

describe('CalAguaService', () => {
  let service: CalAguaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalAguaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
