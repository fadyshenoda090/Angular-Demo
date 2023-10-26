import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesGroupComponent } from './routes-group.component';

describe('RoutesGroupComponent', () => {
  let component: RoutesGroupComponent;
  let fixture: ComponentFixture<RoutesGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoutesGroupComponent]
    });
    fixture = TestBed.createComponent(RoutesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
