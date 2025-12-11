import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cust-directive',
  templateUrl: './cust-directive.component.html',
  styleUrls: ['./cust-directive.component.scss']
})
export class CustDirectiveComponent implements OnInit {
  myForm: FormGroup;

  // myForm = new FormGroup({
  //   name : new FormControl('',[Validators.required]),
  //   email : new FormControl('',[Validators.required , Validators.email]),
  //   password : new FormControl('',[Validators.required]),
  // })

  constructor(private fb: FormBuilder) {
   this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  Submit() {

  }

}
