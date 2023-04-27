import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildCompComponent } from './contentchild-comp.component';

describe('ContentchildCompComponent', () => {
  let component: ContentchildCompComponent;
  let fixture: ComponentFixture<ContentchildCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentchildCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentchildCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
