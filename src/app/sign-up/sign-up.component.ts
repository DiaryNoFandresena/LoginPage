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
  text = new FormControl('' , [Validators.required]);
  password = new FormControl('',[Validators.required]);
  hide = true;
  newAccount !: FormGroup;
  newAccountCreatedStatus !: boolean;

  constructor( private routeur : Router ,
               private formBuilder : FormBuilder ){}

  ngOnInit(): void {
    this.newAccountCreatedStatus=false;
    this.newAccount=this.formBuilder.group({
      username :[null],
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
    // this.newAccountCreatedStatus=false;
  }

  getErrorMessagePassword(){
    if (this.password.hasError('required')){
      return 'You must enter a password';
    }
    return this.password.hasError('password') ? 'Not a same password' : '';
  }

  onSubmitForm(){
    console.log(this.newAccount.value);
  }
}
