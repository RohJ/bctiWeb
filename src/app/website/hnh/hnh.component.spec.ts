import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnhComponent } from './hnh.component';

describe('HnhComponent', () => {
  let component: HnhComponent;
  let fixture: ComponentFixture<HnhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HnhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
