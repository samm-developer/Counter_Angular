import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have two labels', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.labels).toEqual(['Player A', 'Player B']);
  });

  it('should start both counters at zero', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.counts()).toEqual([0, 0]);
  });

  it('should increment and decrement a counter by index', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.increment(0);
    app.increment(0);
    expect(app.counts()[0]).toBe(2);

    app.decrement(0);
    expect(app.counts()[0]).toBe(1);
    expect(app.counts()[1]).toBe(0);
  });

  it('should reset a single counter', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.increment(1);
    app.increment(1);
    app.reset(1);

    expect(app.counts()).toEqual([0, 0]);
  });

  it('should render both counters independently', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.increment(0);
    app.increment(1);
    app.increment(1);
    fixture.detectChanges();

    const values = fixture.nativeElement.querySelectorAll('.counter-value');
    expect(values[0].textContent).toContain('1');
    expect(values[1].textContent).toContain('2');
  });
});
