import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TemplateformComponent } from './pages/templateform/templateform.component';
import { ReactiveformComponent } from './pages/reactiveform/reactiveform.component';
import { CustPipeComponent } from './pages/cust-pipe/cust-pipe.component';
import { CustDirectiveComponent } from './pages/cust-directive/cust-directive.component';
import { DynamicInputComponent } from './pages/dynamic-input/dynamic-input.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'template',component:TemplateformComponent},
  {path:'reactive',component:ReactiveformComponent},
  {path:'cust-pipe',component:CustPipeComponent},
  {path:'cust-dir',component:CustDirectiveComponent},
  {path:'dynamic-inputs',component:DynamicInputComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
