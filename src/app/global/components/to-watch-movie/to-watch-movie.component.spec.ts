import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToWatchMovieComponent } from './to-watch-movie.component';

describe('ToWatchMovieComponent', () => {
  let component: ToWatchMovieComponent;
  let fixture: ComponentFixture<ToWatchMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToWatchMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToWatchMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
