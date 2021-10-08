import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRecordComponent } from './entitys/hr-departament/employee-record/employee-record.component';
import { ListEmployeesComponent } from './entitys/hr-departament/list-employees/list-employees.component';
import { ListServicesComponent } from './entitys/service-departament/list-services/list-services.component';

const routes: Routes = [
  { path:  'employee/record', component:  ListEmployeesComponent},
  { path:  '', component:  EmployeeRecordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
