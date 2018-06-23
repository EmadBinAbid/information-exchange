import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IEFooterComponent } from './ie-footer.component';

describe('IEFooterComponent', () => {
  let component: IEFooterComponent;
  let fixture: ComponentFixture<IEFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IEFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IEFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
