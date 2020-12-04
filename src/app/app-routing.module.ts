import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import{ DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {path: 'homepage', component: BodyComponent},
  { path: 'description/:name' , component: DescriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
