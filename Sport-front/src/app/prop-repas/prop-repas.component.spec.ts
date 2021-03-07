import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropRepasComponent } from './prop-repas.component';

describe('PropRepasComponent', () => {
  let component: PropRepasComponent;
  let fixture: ComponentFixture<PropRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropRepasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
