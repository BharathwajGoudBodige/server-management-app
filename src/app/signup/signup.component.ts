import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../providers/CustomValidators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  success = '';
  registerForm = new FormGroup(
    {
      title: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      //lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobileNumber: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl('', [Validators.required])
    },

    CustomValidators.mustMatch('password', 'confirmPassword') // insert here
  );

  submitted = false;

  constructor(private router: Router) {

  }


  ngOnInit() { }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log("invalid");
    }
    else {
      console.log("valid");
      this.onRegister();
    }
    //   this.success = JSON.stringify(this.registerForm.value);
  }
  onRegister() {
    this.router.navigate(['/login']);
  }


}


