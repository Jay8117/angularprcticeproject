import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm!: FormGroup;

  // myForm=new FormGroup(
  //   {
  //     name: new FormControl('', [Validators.required]),
  //   });
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'country': new FormControl('1'),
      'password': new FormControl(null,[Validators.required,Validators.minLength(6)]),
    })

  }

  getTemplateFormData() {
    console.log(this.myReactiveForm.value);

  }

}
