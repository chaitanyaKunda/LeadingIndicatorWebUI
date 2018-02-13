import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalheadsComponent } from './globalheads.component';

describe('GlobalheadsComponent', () => {
  let component: GlobalheadsComponent;
  let fixture: ComponentFixture<GlobalheadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalheadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
