import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnpComponent } from './mnp.component';

describe('MnpComponent', () => {
  let component: MnpComponent;
  let fixture: ComponentFixture<MnpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MnpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
