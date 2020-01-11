import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyTabComponent } from './frequency-tab.component';

describe('FrequencyTabComponent', () => {
  let component: FrequencyTabComponent;
  let fixture: ComponentFixture<FrequencyTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequencyTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
