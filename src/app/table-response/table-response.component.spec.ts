import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResponseComponent } from './table-response.component';

describe('TableResponseComponent', () => {
  let component: TableResponseComponent;
  let fixture: ComponentFixture<TableResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
