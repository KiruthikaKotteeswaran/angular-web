import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  newcomponent = "Entered in new component created";
  constructor() { }

  ngOnInit() {
  }
  fblink(e){
  window.open("https://www.facebook.com/");
  }
  scroll(id)
  {
   // console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
}
