import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWrapperComponent } from './category-wrapper.component';

describe('CategoryWrapperComponent', () => {
  let component: CategoryWrapperComponent;
  let fixture: ComponentFixture<CategoryWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
