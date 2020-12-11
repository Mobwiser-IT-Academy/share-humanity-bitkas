import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesListComponent } from './issues-list/issues-list.component';
import{ IssuesDetailComponent } from './issues-detail/issues-detail.component';

const routes: Routes = [
  {path: 'homepage', component: IssuesListComponent},
  { path: 'description/:name' , component: IssuesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
