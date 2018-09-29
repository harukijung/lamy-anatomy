import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLamyComponent } from './custom-lamy.component';

describe('CustomLamyComponent', () => {
  let component: CustomLamyComponent;
  let fixture: ComponentFixture<CustomLamyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomLamyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomLamyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
