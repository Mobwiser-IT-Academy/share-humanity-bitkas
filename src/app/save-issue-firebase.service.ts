import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class SaveIssueFirebaseService {

  db : AngularFireDatabase;
  constructor(db: AngularFireDatabase) {
    this.db = db;
   }

  saveIssueFirebase(formValue: any) {
    this.db.list('issues').push({
      afetados: formValue.issueAfected,
      //description: formValue.issuesDescription,
      //imagem: formValue.issueImage,
      name: formValue.issueName,
      rank: formValue.issueRankofPriority
    });
  }
}
