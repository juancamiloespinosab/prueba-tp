import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportarComponent } from './reportar/reportar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
   path: 'consultar',
   component: ConsultarComponent
  },
  {
   path: 'reportar',
   component: ReportarComponent
  },
  {
   path: 'inicio',
   component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
