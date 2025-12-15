import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent {
  myForm!: FormGroup;
  constructor(private fb : FormBuilder) {
    
    this.myForm = this.fb.group({
      skills: this.fb.array([this.createSkill()])
    })
  }

  // create input control
  createSkill(): FormGroup {
    return this.fb.group({
      skill: ['', Validators.required]
    });
  }

  // getter
  get skills(): FormArray {
    return this.myForm.get('skills') as FormArray;
  }

  // add input
  addSkill() {
    this.skills.push(this.createSkill());
  }

  // remove input
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  submit() {
    console.log(this.myForm.value);
  }


  
}
