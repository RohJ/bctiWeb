import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindicoursesComponent } from './hindicourses.component';

describe('HindicoursesComponent', () => {
  let component: HindicoursesComponent;
  let fixture: ComponentFixture<HindicoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HindicoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HindicoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
