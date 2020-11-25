import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdCommandComponent } from './gd-command.component';

describe('GdCommandComponent', () => {
  let component: GdCommandComponent;
  let fixture: ComponentFixture<GdCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
