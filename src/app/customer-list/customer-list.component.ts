import { Component, OnInit } from '@angular/core';
import customerList from '../../assets/data/customer-list.json';
import { Customer } from '../customerList.type';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor() { }
  
  customers : Customer[] = customerList; 

  ngOnInit(): void {
  }

}
