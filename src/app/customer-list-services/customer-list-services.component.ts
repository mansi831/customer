import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Customer } from '../customerList.type';

@Component({
  selector: 'app-customer-list-services',
  templateUrl: './customer-list-services.component.html',
  styleUrls: ['./customer-list-services.component.css']
})
export class CustomerListServicesComponent implements OnInit {
  customers : Customer[] = [];
  constructor( private servicesService : ServicesService) { }

  ngOnInit(): void {
    this.servicesService.getJson().subscribe(data => {
      this.customers = data;
  });
  }

}
