import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngcoursesComponent } from './engcourses.component';

describe('EngcoursesComponent', () => {
  let component: EngcoursesComponent;
  let fixture: ComponentFixture<EngcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngcoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EngcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
