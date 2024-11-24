import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent {
  employees: Employee[] = [];
  searchQuery: string = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(index: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(index);
      this.employees = this.employeeService.getEmployees();
    }
  }

  searchEmployees() {
    this.employees = this.employeeService.searchEmployee(this.searchQuery);
  }
}
