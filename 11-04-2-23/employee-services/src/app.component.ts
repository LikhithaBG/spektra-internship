import { Component } from '@angular/core';
import { ProsService } from './pros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prolist';
  employees!: any[];

  constructor(private employeeService: ProsService) {}

  displayEmployees() {
    this.employees = this.employeeService.getpros();
  }
 
}
