import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LamyUploadComponent } from './lamy-upload.component';

describe('LamyUploadComponent', () => {
  let component: LamyUploadComponent;
  let fixture: ComponentFixture<LamyUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamyUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LamyUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
