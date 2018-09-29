import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LamyListComponent } from './lamy-list.component';

describe('LamyListComponent', () => {
  let component: LamyListComponent;
  let fixture: ComponentFixture<LamyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LamyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
