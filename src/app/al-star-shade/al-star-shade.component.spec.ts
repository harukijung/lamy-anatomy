import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlStarShadeComponent } from './al-star-shade.component';

describe('AlStarShadeComponent', () => {
  let component: AlStarShadeComponent;
  let fixture: ComponentFixture<AlStarShadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlStarShadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlStarShadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
