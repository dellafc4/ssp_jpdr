import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveOptionsComponent } from './move-options.component';

describe('MoveOptionsComponent', () => {
  let component: MoveOptionsComponent;
  let fixture: ComponentFixture<MoveOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
