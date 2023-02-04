import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWebsiteComponent } from './menu-website.component';

describe('MenuWebsiteComponent', () => {
  let component: MenuWebsiteComponent;
  let fixture: ComponentFixture<MenuWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
