import { Component, OnInit } from '@angular/core';
import customerList from '../../assets/data/customer-list.json';
import { Customer } from '../customerList.type';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerss : any = []; 

  customersss : any = []; 

  constructor(private httpClient : HttpClient ) { }
  
  customers : Customer[] = customerList; 
  
  

  ngOnInit(): void {
    this.httpClient.get("assets/data/customer-list.json").subscribe(data =>{
      this.customerss = data;
    })

  }

}
