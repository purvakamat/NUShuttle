import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPanelComponent } from './driver-panel.component';

describe('DriverPanelComponent', () => {
  let component: DriverPanelComponent;
  let fixture: ComponentFixture<DriverPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
