import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrhComponent } from './irh.component';

describe('IrhComponent', () => {
  let component: IrhComponent;
  let fixture: ComponentFixture<IrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IrhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
