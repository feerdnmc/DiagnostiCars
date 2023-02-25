import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersComponent } from './edit-pers.component';

describe('EditPersComponent', () => {
  let component: EditPersComponent;
  let fixture: ComponentFixture<EditPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
