import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersComponent } from './datos-pers.component';

describe('DatosPersComponent', () => {
  let component: DatosPersComponent;
  let fixture: ComponentFixture<DatosPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
