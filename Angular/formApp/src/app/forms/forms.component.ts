import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UniqueNameValidator } from '../unique-name.validator';


@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  
  exampleForm:FormGroup

  // constructor(private fb: FormBuilder) {
  //   this.exampleForm = this.fb.group({
  //     name: ['', [Validators.required]],
  //     email:['',[Validators.required, Validators.email]],
  //     skills:this.fb.array([])
  //   })
  // }

  
  constructor(private fb: FormBuilder, private uniqueNameValidator: UniqueNameValidator) {
    this.exampleForm = this.fb.group({
      name: ['', [Validators.required], [this.uniqueNameValidator.validate.bind(this.uniqueNameValidator)]], // Async validator added
      email: ['', [Validators.required, Validators.email]],
      skills: this.fb.array([])
    });
  }

  get skills(): FormArray {
    return this.exampleForm.get('skills') as FormArray
  }

  addSkill(){
    this.skills.push(this.fb.control('',Validators.required))
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
  onSubmit() {
    console.log(this.exampleForm.value)
  }
  
}




