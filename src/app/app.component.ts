import { Component } from '@angular/core';
import data from '../assets/data/data.json';

interface Customer{
  id: Number;
  Name: String;
  Gender: String;
  Balance: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customers';

  customers : Customer[] = data; 
}
