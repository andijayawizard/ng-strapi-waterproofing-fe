import { TestBed } from '@angular/core/testing';

import { MenuWebsiteService } from './menu-website.service';

describe('MenuWebsiteService', () => {
  let service: MenuWebsiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuWebsiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
