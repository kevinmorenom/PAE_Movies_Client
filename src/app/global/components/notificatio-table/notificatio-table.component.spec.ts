import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificatioTableComponent } from './notificatio-table.component';

describe('NotificatioTableComponent', () => {
  let component: NotificatioTableComponent;
  let fixture: ComponentFixture<NotificatioTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificatioTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificatioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
