import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AngularFireService {

  issueImagePath: string;
  db: AngularFireDatabase;
  items : Observable<any[]>
  constructor(db : AngularFireDatabase, private storage: AngularFireStorage) {
    this.items = db.list('issues').valueChanges();
    this.db = db;
    this.issueImagePath="";
   }

   saveIssueFirebase(formValue: any) {
    let file = formValue.issueImage;
    let path = file.split("\\")[2];
    this.storage.upload('issues/' + path, file);
    this.db.list('issues').push({
      afetados: formValue.issueAfected,
      description: formValue.issueDescription,
      imagem: 'issues/' + path,
      name: formValue.issueName,
      rank: formValue.issueRankofPriority
    });
  }
}
