import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; // this will give us access to route parameters
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  goals:any;
  constructor(private route:ActivatedRoute,private router:Router,private data:DataService) { // instance of activated route
    this.route.params.subscribe(res=>console.log(res.id)); // fetch route parameters
  }

  ngOnInit() {
    this.data.goal.subscribe(res=>this.goals=res);
  }
  sendMeHome(){
    this.router.navigate(['']);// ' ' =>>path
  }
}
