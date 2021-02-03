import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { from, Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AngularFireService {

  issueImagePath: string;
  db: AngularFireDatabase;
  items : Observable<any[]>
  downloadURL : Observable<string>;
  imageURL: string;

  constructor(db : AngularFireDatabase, private storage: AngularFireStorage) {
    this.items = db.list('issues').valueChanges();
    this.db = db;
   }

   saveImageStorage(issueImage : File) : AngularFireUploadTask {
    const uploadTask : AngularFireUploadTask = this.storage.upload('issues/' + issueImage.name, issueImage);
    this.issueImagePath = 'issues/' + issueImage.name;
    this.downloadURL = this.getDownloadURL(uploadTask, this.issueImagePath);
    return uploadTask;
   }

   saveIssueFirebase(formValue: any) : string {
    this.downloadURL.subscribe(x => {
      this.db.list('issues').push({
        afetados: formValue.issueAfected,
        description: formValue.issueDescription,
        imagem: x,
        name: formValue.issueName,
        rank: formValue.issueRankofPriority
        
      });
      
    });
    return "Upload Feito"
    /*return {
      uploadProgress: uploadTask.percentageChanges()
    };*/
  }

  private getDownloadURL(uploadTask : AngularFireUploadTask, path : string) : Observable<string> {
    return from(uploadTask).pipe(switchMap((_) => this.storage.ref(path).getDownloadURL())); 
  }
}
