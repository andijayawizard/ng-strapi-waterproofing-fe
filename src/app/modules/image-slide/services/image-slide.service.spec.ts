import { TestBed } from '@angular/core/testing';

import { ImageSlideService } from './image-slide.service';

describe('ImageSlideService', () => {
  let service: ImageSlideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSlideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
