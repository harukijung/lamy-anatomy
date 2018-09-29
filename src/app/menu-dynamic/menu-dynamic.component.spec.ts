import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDynamicComponent } from './menu-dynamic.component';

describe('MenuDynamicComponent', () => {
  let component: MenuDynamicComponent;
  let fixture: ComponentFixture<MenuDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
