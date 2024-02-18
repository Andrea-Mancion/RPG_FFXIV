import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyurComponent } from './hyur.component';

describe('HyurComponent', () => {
  let component: HyurComponent;
  let fixture: ComponentFixture<HyurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HyurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HyurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
