import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit{

    activatedRoute:ActivatedRoute=inject(ActivatedRoute)

    ngOnInit() {
      this.activatedRoute.fragment.subscribe(d=>{
  this.JoumpToSection(d)
      })
    }
    JoumpToSection(section){
document.getElementById(section).scrollIntoView({behavior:'smooth'})
    }
-

}