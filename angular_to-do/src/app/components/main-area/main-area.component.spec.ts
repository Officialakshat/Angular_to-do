import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAreaComponent } from './main-area.component';

describe('MainAreaComponent', () => {
  let component: MainAreaComponent;
  let fixture: ComponentFixture<MainAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
