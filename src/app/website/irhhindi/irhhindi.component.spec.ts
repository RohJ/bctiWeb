import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrhhindiComponent } from './irhhindi.component';

describe('IrhhindiComponent', () => {
  let component: IrhhindiComponent;
  let fixture: ComponentFixture<IrhhindiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrhhindiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IrhhindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
