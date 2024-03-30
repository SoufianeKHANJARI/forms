import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenTemplateComponent } from './driven-template.component';

describe('DrivenTemplateComponent', () => {
  let component: DrivenTemplateComponent;
  let fixture: ComponentFixture<DrivenTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrivenTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrivenTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
