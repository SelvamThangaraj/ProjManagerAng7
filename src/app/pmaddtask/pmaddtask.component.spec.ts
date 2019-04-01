import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmaddtaskComponent } from './pmaddtask.component';

describe('PmaddtaskComponent', () => {
  let component: PmaddtaskComponent;
  let fixture: ComponentFixture<PmaddtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmaddtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmaddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
