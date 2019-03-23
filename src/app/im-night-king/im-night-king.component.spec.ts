import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImNightKingComponent } from './im-night-king.component';

describe('ImNightKingComponent', () => {
  let component: ImNightKingComponent;
  let fixture: ComponentFixture<ImNightKingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImNightKingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImNightKingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
