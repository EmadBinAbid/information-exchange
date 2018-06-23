import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IEAppComponent } from './ie-app.component';

describe('IEAppComponent', () => {
  let component: IEAppComponent;
  let fixture: ComponentFixture<IEAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IEAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IEAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
