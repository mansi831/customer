import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListServicesComponent } from './customer-list-services.component';

describe('CustomerListServicesComponent', () => {
  let component: CustomerListServicesComponent;
  let fixture: ComponentFixture<CustomerListServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
