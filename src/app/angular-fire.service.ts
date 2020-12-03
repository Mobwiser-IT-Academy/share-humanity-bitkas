import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularFireService {
  items : Observable<any[]>
  constructor(db : AngularFireDatabase) {
    this.items = db.list('issues').valueChanges();
   }
}
