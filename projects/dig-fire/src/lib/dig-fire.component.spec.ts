import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigFireComponent } from './dig-fire.component';

describe('DigFireComponent', () => {
  let component: DigFireComponent;
  let fixture: ComponentFixture<DigFireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigFireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigFireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
