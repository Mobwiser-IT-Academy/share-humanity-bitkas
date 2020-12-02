import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  items : Observable<any[]>;
  constructor(db : AngularFireDatabase) { 
    this.items = db.list('issues').valueChanges();
  }
  
  ngOnInit(): void {
  }

}
