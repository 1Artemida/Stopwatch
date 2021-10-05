import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeFormatterPipe } from '../pipes/time-formatter.pipe';

import { PageComponent } from './page.component';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageComponent, TimeFormatterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('timer methods', () => {
    it('resetting the timer to 0', () => {
      component.timer = 50;
      component.resetTimer();
      expect(component.timer).toEqual(0);
    });
  });
});
