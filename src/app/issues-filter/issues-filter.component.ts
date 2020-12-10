import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-issues-filter',
  templateUrl: './issues-filter.component.html',
  styleUrls: ['./issues-filter.component.css']
})
export class IssuesFilterComponent implements OnInit {

  @Output() pedido = new EventEmitter<string>();
  constructor() {
    
   }

  ngOnInit(): void {
  
  }

  issuesFilter(value : string) {
    this.pedido.emit(value);
    alert('enviado: '+value);
  }
}
