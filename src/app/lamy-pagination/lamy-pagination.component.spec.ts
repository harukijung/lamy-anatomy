import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LamyPaginationComponent } from './lamy-pagination.component';

describe('LamyPaginationComponent', () => {
  let component: LamyPaginationComponent;
  let fixture: ComponentFixture<LamyPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamyPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LamyPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
