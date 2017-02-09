/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthConfigService } from './auth-config.service';

describe('AuthConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthConfigService]
    });
  });

  it('should ...', inject([AuthConfigService], (service: AuthConfigService) => {
    expect(service).toBeTruthy();
  }));
});
