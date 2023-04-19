import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsforngcontentComponent } from './productsforngcontent.component';

describe('ProductsforngcontentComponent', () => {
  let component: ProductsforngcontentComponent;
  let fixture: ComponentFixture<ProductsforngcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsforngcontentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsforngcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
