import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionaldirectiveComponent } from './conditionaldirective.component';

describe('ConditionaldirectiveComponent', () => {
  let component: ConditionaldirectiveComponent;
  let fixture: ComponentFixture<ConditionaldirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionaldirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionaldirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
