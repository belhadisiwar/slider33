import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-glam2',
  templateUrl: './glam2.component.html',
  styleUrls: ['./glam2.component.css']
})
export class Glam2Component implements OnInit {
 
  constructor(private dataservice: DataService){}
  user:any = [];
  ngOnInit(){
   this.http();
  }
  http(){
    this.dataservice.getUsers().subscribe((data)=>{
      this.user=data['data'];
      console.log(this.user);
    });
  }
}
