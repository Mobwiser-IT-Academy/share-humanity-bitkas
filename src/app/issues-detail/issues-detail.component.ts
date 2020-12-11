import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireService } from '../angular-fire.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './issues-detail.component.html',
  styleUrls: ['./issues-detail.component.css']
})
export class IssuesDetailComponent implements OnInit {
  route: any;
  issueName : string;
  items : Observable<any[]>;
  constructor(item : AngularFireService, routes: ActivatedRoute) {
    this.items = item.items;
    this.route = routes;
    this.issueName="";
   }
  
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.issueName = params['name'];
    });


  }

  issue() : string {
    return this.issueName;
  }

}
