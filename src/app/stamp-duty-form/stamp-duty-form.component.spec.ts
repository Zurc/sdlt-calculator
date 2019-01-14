import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampDutyFormComponent } from './stamp-duty-form.component';

describe('StampDutyFormComponent', () => {
  let component: StampDutyFormComponent;
  let fixture: ComponentFixture<StampDutyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampDutyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampDutyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
