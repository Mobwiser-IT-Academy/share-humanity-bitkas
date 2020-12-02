import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeNavBar() {
    let nav = document.getElementById('topnav')!;
    if(nav.className === 'topnav') {
      nav.className += ' responsive';
      nav.style.height = "100px";
      nav.style.display = "block";
    } else {
      nav.className = 'topnav';
      nav.style.height = "50px";
      nav.style.display = "flex";
    }
    
  }
}
