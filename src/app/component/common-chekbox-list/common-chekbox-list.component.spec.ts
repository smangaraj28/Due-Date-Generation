import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonChekboxListComponent } from './common-chekbox-list.component';

describe('CommonChekboxListComponent', () => {
  let component: CommonChekboxListComponent;
  let fixture: ComponentFixture<CommonChekboxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonChekboxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonChekboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
