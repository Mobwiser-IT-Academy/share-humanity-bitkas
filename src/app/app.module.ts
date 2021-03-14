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
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServiceWorkerModule } from '@angular/service-worker'
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
    MatFormFieldModule,
    MatInputModule,
    AngularFireStorageModule,
    MatProgressBarModule,
    MaterialFileInputModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { 
      enabled: environment.production,
    registrationStrategy : 'registerImmediately'
        })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
