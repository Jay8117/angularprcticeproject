import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
clientData:any[]=[];


data=[
  {name:"Jay" , age : 20 , salary:2000},
  {name:"Jay" , age : 20 , salary:2000},
  {name:"Jay" , age : 20 , salary:2000}
]
  constructor(private ser:DemoService){

  }

  ngOnInit(): void {
    // this.ser.demo().subscribe((res:any)=>{
    //   this.clientData=res;
    //   console.log(this.clientData);
    // })
    
  }



}
