import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderloaderComponent } from './sliderloader.component';

describe('SliderloaderComponent', () => {
  let component: SliderloaderComponent;
  let fixture: ComponentFixture<SliderloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
