import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireService } from '../angular-fire.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  item : Observable<any[]>;
  constructor(item : AngularFireService) {
    this.item = item.items;
   }
  
  ngOnInit(): void {
  }

}
