import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';  // Path to employee-list component
import { EmployeeFormComponent } from './employee-form/employee-form.component';  // Path to employee-form component
import { EmployeeSearchComponent } from './employee-search/employee-search.component';  // path to employee-search component

@NgModule({
  declarations: [
    AppComponent,                // Declare AppComponent
    EmployeeListComponent,       // Declare EmployeeListComponent
    EmployeeFormComponent,       // Declare EmployeeFormComponent
    EmployeeSearchComponent      // Declare EmployeeSearchComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]       // Bootstrapping the AppComponent
})
export class AppModule { }
