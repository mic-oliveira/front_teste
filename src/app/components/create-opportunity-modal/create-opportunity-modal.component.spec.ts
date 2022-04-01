import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOpportunityModalComponent } from './create-opportunity-modal.component';

describe('CreateOpportunityModalComponent', () => {
  let component: CreateOpportunityModalComponent;
  let fixture: ComponentFixture<CreateOpportunityModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOpportunityModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOpportunityModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
