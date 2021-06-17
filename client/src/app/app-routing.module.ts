import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './request/request.component';
import { AssignComponent } from './assign/assign.component';

const routes: Routes = [
  {path:'request', component:RequestComponent},
  {path:'assign/:name',component:AssignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
