import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmviewtaskComponent } from './pmviewtask.component';

describe('PmviewtaskComponent', () => {
  let component: PmviewtaskComponent;
  let fixture: ComponentFixture<PmviewtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmviewtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmviewtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
