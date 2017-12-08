import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrideComponent } from './myride.component';

describe('MyrideComponent', () => {
  let component: MyrideComponent;
  let fixture: ComponentFixture<MyrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
