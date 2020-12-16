import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-issues-filter',
  templateUrl: './issues-filter.component.html',
  styleUrls: ['./issues-filter.component.css']
})
export class IssuesFilterComponent implements OnInit {

  keyPressed : any;
  valueInput: any;
  @Output() pedido = new EventEmitter<string>();
  constructor() {
    
   }

  ngOnInit(): void {
  }



  issuesFilter(value : any) {
   
      this.pedido.emit(value.target.value);
    
  }
}
