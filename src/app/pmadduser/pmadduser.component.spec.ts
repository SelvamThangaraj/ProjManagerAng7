import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmadduserComponent } from './pmadduser.component';

describe('PmadduserComponent', () => {
  let component: PmadduserComponent;
  let fixture: ComponentFixture<PmadduserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmadduserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmadduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
