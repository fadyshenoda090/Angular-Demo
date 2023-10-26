import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTermplateDrivenComponent } from './product-termplate-driven.component';

describe('ProductTermplateDrivenComponent', () => {
  let component: ProductTermplateDrivenComponent;
  let fixture: ComponentFixture<ProductTermplateDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTermplateDrivenComponent]
    });
    fixture = TestBed.createComponent(ProductTermplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
