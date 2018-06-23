import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IELandingPageComponent } from './ie-landing-page.component';

describe('IELandingPageComponent', () => {
  let component: IELandingPageComponent;
  let fixture: ComponentFixture<IELandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IELandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IELandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
