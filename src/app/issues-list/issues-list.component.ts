import { Component, Input, OnInit } from '@angular/core';
import { AngularFireService } from '../angular-fire.service';
import { Observable } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Issue } from './Issues';
import { IssuesFilterComponent } from '../issues-filter/issues-filter.component';

@Component({
  selector: 'app-body',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('1.5s 0.1s ease-in')
      ]),
      transition('* => void', [
        animate('1.5s 0.1s ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class IssuesListComponent implements OnInit {
  items : Observable<any[]>;
  pedido : string;
  constructor(private fireService : AngularFireService) { 
    this.items = fireService.items;
    this.pedido="";    
  }
  
  ngOnInit(): void {
  }

  getIssue(value : any) {
    this.pedido = value;
    console.log(this.pedido);
  }
  
  resolveIssues(value: any, issue: any) : boolean {
    if(value == undefined) {
      return true;
    } else if(issue.name.toLocaleLowerCase().trim() === value.toLocaleLowerCase().trim() || issue.name.trim().toLocaleLowerCase().includes(value.trim().toLocaleLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

}
