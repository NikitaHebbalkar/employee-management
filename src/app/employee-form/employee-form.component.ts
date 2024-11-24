import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent {
  @Input() employee: Employee | null = null;
  @Output() employeeAdded = new EventEmitter<Employee>();

  name: string = '';
  companyName: string = '';
  email: string = '';
  contactNo: string = '';
  designation: string = 'Software Developer';
  avatar: string = 'avatar1.png'; // Default avatar

  designations = ['Software Developer', 'Senior Software Developer', 'Quality Assurance', 'Technical Lead', 'Manager'];
  avatars = ['avatar1.png', 'avatar2.png', 'avatar3.png']; // Predefined avatars

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    if (this.employee) {
      this.name = this.employee.name;
      this.companyName = this.employee.companyName;
      this.email = this.employee.email;
      this.contactNo = this.employee.contactNo;
      this.designation = this.employee.designation;
      this.avatar = this.employee.avatar;
    }
  }

  submitForm() {
    const newEmployee = new Employee(
      this.name,
      this.companyName,
      this.email,
      this.contactNo,
      this.designation,
      this.avatar
    );

    if (this.employee) {
      // Edit existing employee
      const index = this.employeeService.getEmployees().indexOf(this.employee);
      this.employeeService.updateEmployee(index, newEmployee);
    } else {
      // Add new employee
      this.employeeService.addEmployee(newEmployee);
    }

    this.employeeAdded.emit(newEmployee);
  }
}
