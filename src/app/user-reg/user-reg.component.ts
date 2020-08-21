import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.scss']
})
export class UserRegComponent implements OnInit {

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',[Validators.email, Validators.required]),
      password: new FormControl(null,[Validators.required, Validators.minLength(6)]),
      login : new FormControl('', Validators.required)
    });
  }




  submit() {
    console.log('Form submitted: ', this.form);
    const formData = {...this.form.value};
    console.log(formData.email)
  }

}
