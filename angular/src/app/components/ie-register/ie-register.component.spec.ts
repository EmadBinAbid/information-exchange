import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IERegisterComponent } from './ie-register.component';

describe('IERegisterComponent', () => {
  let component: IERegisterComponent;
  let fixture: ComponentFixture<IERegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IERegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IERegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
