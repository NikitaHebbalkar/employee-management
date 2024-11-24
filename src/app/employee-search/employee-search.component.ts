import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html'
})
export class EmployeeSearchComponent {
  @Output() searchQuery = new EventEmitter<string>();

  searchTerm: string = '';

  onSearch() {
    this.searchQuery.emit(this.searchTerm);
  }
}
