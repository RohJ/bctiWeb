import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpchindiComponent } from './hpchindi.component';

describe('HpchindiComponent', () => {
  let component: HpchindiComponent;
  let fixture: ComponentFixture<HpchindiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HpchindiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HpchindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
