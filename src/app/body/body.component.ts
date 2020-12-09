import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
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
export class BodyComponent implements OnInit {

  items : Observable<any[]>;
  constructor(private fireService : AngularFireService) { 
    this.items = fireService.items;
  }
  
  ngOnInit(): void {
  }

  filter(value:any) {
    document.getElementById('unica')!.innerHTML = "";
    this.items.subscribe((data) => {
      let filtered = data.filter((x) => x.name.toLocaleLowerCase().trim() === value.toLocaleLowerCase().trim() || x.name.trim().toLocaleLowerCase().includes(value.trim().toLocaleLowerCase()));
      
      let markup = `<mat-card class="card" >
      <img mat-card-image src="../../assets/${filtered[0].imagem}" alt="IssueImage" style="width:100% height=50%">
      <mat-card-content style="width:100%">
        <h3>${ filtered[0].name }</h3>
        <h4>People Afected</h4>
        <p>${ filtered[0].afetados }</p>
        <h4>Rank of Priority</h4>
        <p>${ filtered[0].rank }</p>   
        <a [routerLink]="['/description',  issue.name]">Description</a>                         
      </mat-card-content>
 </mat-card> `
      let node = document.getElementById('unica')!;
      node.innerHTML = markup;
  });
}

}
