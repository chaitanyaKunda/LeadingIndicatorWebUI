import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchmgmtComponent } from './branchmgmt.component';

describe('BranchmgmtComponent', () => {
  let component: BranchmgmtComponent;
  let fixture: ComponentFixture<BranchmgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchmgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
