import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFullComponent } from './form-full.component';

describe('FormFullComponent', () => {
  let component: FormFullComponent;
  let fixture: ComponentFixture<FormFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
