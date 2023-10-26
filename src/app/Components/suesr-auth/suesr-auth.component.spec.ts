import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuesrAuthComponent } from './suesr-auth.component';

describe('SuesrAuthComponent', () => {
  let component: SuesrAuthComponent;
  let fixture: ComponentFixture<SuesrAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuesrAuthComponent]
    });
    fixture = TestBed.createComponent(SuesrAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
