import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  public userModel = new User('','','','','','',false)
  public categories =['Bakery','Dessert','Drinks','Vegetables','Fruits']

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.userModel);
  }

}
