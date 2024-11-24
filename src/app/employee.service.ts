import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees: Employee[] = [];

  constructor() {}

  // Add a new employee
  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  // Get all employees
  getEmployees(): Employee[] {
    return this.employees;
  }

  // Update an existing employee
  updateEmployee(index: number, updatedEmployee: Employee): void {
    this.employees[index] = updatedEmployee;
  }

  // Delete an employee
  deleteEmployee(index: number): void {
    this.employees.splice(index, 1);
  }

  // Search employees by name or email
  searchEmployee(query: string): Employee[] {
    return this.employees.filter(emp =>
      emp.name.toLowerCase().includes(query.toLowerCase()) ||
      emp.email.toLowerCase().includes(query.toLowerCase())
    );
  }
}
