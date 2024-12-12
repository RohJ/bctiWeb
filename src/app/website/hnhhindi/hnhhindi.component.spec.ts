import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnhhindiComponent } from './hnhhindi.component';

describe('HnhhindiComponent', () => {
  let component: HnhhindiComponent;
  let fixture: ComponentFixture<HnhhindiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HnhhindiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HnhhindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
