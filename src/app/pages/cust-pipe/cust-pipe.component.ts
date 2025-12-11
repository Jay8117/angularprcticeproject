import { Component } from '@angular/core';

@Component({
  selector: 'app-cust-pipe',
  templateUrl: './cust-pipe.component.html',
  styleUrls: ['./cust-pipe.component.scss']
})
export class CustPipeComponent {

  today:Date=new Date();

  empData=[
    {
      name:'jay',age:20,email:"jay@123",phone:'7743974006'
    },
    {
      name:'sam',age:27,email:"sam@123",phone:'4397400689'
    },

  ]

}
