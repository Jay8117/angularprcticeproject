import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent {
  constructor(){}

   getTemplateFormData(templateForm:NgForm){
     console.log(templateForm.control.value);
     
    }

}
