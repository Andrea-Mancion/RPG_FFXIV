import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCharactersComponent } from './check-characters.component';

describe('CheckCharactersComponent', () => {
  let component: CheckCharactersComponent;
  let fixture: ComponentFixture<CheckCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckCharactersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
