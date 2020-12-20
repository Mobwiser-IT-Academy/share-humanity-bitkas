import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesListComponent } from './issues-list/issues-list.component';
import{ IssuesDetailComponent } from './issues-detail/issues-detail.component';
import { SubmitIssuesFormComponent } from './submit-issues-form/submit-issues-form.component';

const routes: Routes = [
  { path: '' , component: IssuesListComponent },
  {path: 'homepage', component: IssuesListComponent},
  { path: 'description/:name' , component: IssuesDetailComponent },
  { path: 'issueForm', component:  SubmitIssuesFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
