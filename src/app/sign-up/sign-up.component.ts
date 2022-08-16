import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  text = new FormControl('' , [Validators.required])
  hide = true;
  newAccount !: FormGroup;

  constructor( private routeur : Router ,
               private formBuilder : FormBuilder ){}

  ngOnInit(): void {
    this.newAccount=this.formBuilder.group({
      name :[null],
      lastName : [null],
      email :[null],
      password :[null],
      confirmPassword :[null],
    });
  }    

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.text.hasError('required')){
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';

  }

  onSubmitForm(){
    console.log(this.newAccount.value);
  }
}
