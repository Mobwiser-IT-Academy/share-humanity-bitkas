import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-issues-filter',
  templateUrl: './issues-filter.component.html',
  styleUrls: ['./issues-filter.component.css']
})
export class IssuesFilterComponent implements OnInit {

  @Output() pedido = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    let node = document.getElementById('submitFilter')!;
    node.addEventListener('click', this.issuesFilter);
  }

  issuesFilter() {
    let input = document.getElementById("filter")! as HTMLInputElement;
    this.pedido.emit(input.value);
  }

}
