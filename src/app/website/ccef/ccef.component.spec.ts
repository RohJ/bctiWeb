import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcefComponent } from './ccef.component';

describe('CcefComponent', () => {
  let component: CcefComponent;
  let fixture: ComponentFixture<CcefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CcefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CcefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
