import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowatchComponent } from './towatch.component';

describe('TowatchComponent', () => {
  let component: TowatchComponent;
  let fixture: ComponentFixture<TowatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
