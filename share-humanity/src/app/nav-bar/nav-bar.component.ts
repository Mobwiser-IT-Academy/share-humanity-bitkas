import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

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
