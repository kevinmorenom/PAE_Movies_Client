import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedMovieComponent } from './watched-movie.component';

describe('WatchedMovieComponent', () => {
  let component: WatchedMovieComponent;
  let fixture: ComponentFixture<WatchedMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchedMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
