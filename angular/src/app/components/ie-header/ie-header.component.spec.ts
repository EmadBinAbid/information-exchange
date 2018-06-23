import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IEHeaderComponent } from './ie-header.component';

describe('IEHeaderComponent', () => {
  let component: IEHeaderComponent;
  let fixture: ComponentFixture<IEHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IEHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IEHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
