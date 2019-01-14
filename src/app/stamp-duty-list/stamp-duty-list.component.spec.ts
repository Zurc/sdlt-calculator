import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampDutyListComponent } from './stamp-duty-list.component';

describe('StampDutyListComponent', () => {
  let component: StampDutyListComponent;
  let fixture: ComponentFixture<StampDutyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampDutyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampDutyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
