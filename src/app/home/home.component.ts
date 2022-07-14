import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy{
  mySubscription:Subscription;
  constructor(private routerService:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.mySubscription=interval(1000).subscribe((value)=>{
      console.log(value);
    },(err)=>{
      console.log(err);
    },()=>{
      console.log("Completed");
    });
  }
  onGo() {
     this.routerService.navigate(['servers'],{relativeTo:this.activatedRoute})
  }
  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

}
