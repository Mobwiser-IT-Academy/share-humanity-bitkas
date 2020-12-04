import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireService } from '../angular-fire.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  route: any;
  name : any;
  item : Observable<any[]>;
  constructor(item : AngularFireService, routes: ActivatedRoute) {
    this.item = item.items;
    this.route = routes;
   }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.name = params['name'];
      console.log(name);
    });
  }

}
