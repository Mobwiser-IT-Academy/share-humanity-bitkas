import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularFireService {

  db: AngularFireDatabase;
  items : Observable<any[]>
  constructor(db : AngularFireDatabase) {
    this.items = db.list('issues').valueChanges();
    this.db = db;
   }

   saveIssueFirebase(formValue: any) {
    this.db.list('issues').push({
      afetados: formValue.issueAfected,
      description: formValue.issuesDescription,
      //imagem: formValue.issueImage,
      name: formValue.issueName,
      rank: formValue.issueRankofPriority
    });
  }
}
