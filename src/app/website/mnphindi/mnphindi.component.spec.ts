import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnphindiComponent } from './mnphindi.component';

describe('MnphindiComponent', () => {
  let component: MnphindiComponent;
  let fixture: ComponentFixture<MnphindiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MnphindiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MnphindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
