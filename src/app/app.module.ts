import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IssuesListComponent } from './issues-list/issues-list.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { IssuesDetailComponent } from './issues-detail/issues-detail.component';
import { IssuesFilterComponent } from './issues-filter/issues-filter.component';
import { SubmitIssuesFormComponent } from './submit-issues-form/submit-issues-form.component';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IssuesListComponent,
    IssuesDetailComponent,
    IssuesFilterComponent,
    SubmitIssuesFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
