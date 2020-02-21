import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    
  }
  public userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()

  })
  loadData(){
    // this.userForm.patch({
    this.userForm.setValue({
      email: "ak@gmail.com",
      password:"akshat"
    })
  }
  constructor( private fb: FormBuilder) { }
   //constructor( ) { }

  // ngOnInit(): void {
    // this.createForm()
  // }
//  createForm(){
   // this.userForm = this.fb.group({
   //  'email':[null,Validators.required, Validators.minLength(3),Validators.maxLength(10)],
  //  'password':[null,Validators.required]

  //  })
//  }
 onSubmit(data){
    console.log(data);
 }
}
