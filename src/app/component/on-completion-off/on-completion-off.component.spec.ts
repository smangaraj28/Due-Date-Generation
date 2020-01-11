import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCompletionOffComponent } from './on-completion-off.component';

describe('OnCompletionOffComponent', () => {
  let component: OnCompletionOffComponent;
  let fixture: ComponentFixture<OnCompletionOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnCompletionOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnCompletionOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
