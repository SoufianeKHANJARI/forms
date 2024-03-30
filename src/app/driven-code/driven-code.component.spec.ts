import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenCodeComponent } from './driven-code.component';

describe('DrivenCodeComponent', () => {
  let component: DrivenCodeComponent;
  let fixture: ComponentFixture<DrivenCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrivenCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrivenCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
