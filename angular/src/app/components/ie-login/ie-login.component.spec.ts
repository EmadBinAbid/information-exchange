import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IELoginComponent } from './ie-login.component';

describe('IELoginComponent', () => {
  let component: IELoginComponent;
  let fixture: ComponentFixture<IELoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IELoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IELoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
