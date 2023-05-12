import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSignInComponent } from './slide-sign-in.component';

describe('SlideSignInComponent', () => {
  let component: SlideSignInComponent;
  let fixture: ComponentFixture<SlideSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
