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

}
