import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmaddprjComponent } from './pmaddprj.component';

describe('PmaddprjComponent', () => {
  let component: PmaddprjComponent;
  let fixture: ComponentFixture<PmaddprjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmaddprjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmaddprjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
