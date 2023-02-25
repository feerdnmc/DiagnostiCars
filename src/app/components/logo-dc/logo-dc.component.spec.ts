import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDCComponent } from './logo-dc.component';

describe('LogoDCComponent', () => {
  let component: LogoDCComponent;
  let fixture: ComponentFixture<LogoDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoDCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
