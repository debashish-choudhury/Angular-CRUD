import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  //{ path: 'crud', redirectTo: 'crud/home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'Create', component: CreateComponent },
  { path: 'update/:productid', component: UpdateComponent } 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
