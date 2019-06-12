import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';

import { AutService } from './aut.service';



@Component({
  selector: 'app-aut',
  templateUrl: './aut.component.html',
  styleUrls: ['./aut.component.css']
})
export class AutComponent  {
  
  isLoginMode = true;
constructor (private autservice : AutService) {}

  onSwitchMode(){

    this.isLoginMode = !this.isLoginMode;
  }
onSubmit(form: NgForm){
  if(!form.valid){
return;
  }
  const email = form.value.email;
  const password = form.value.password;
  if (!this.isLoginMode)
  {

  }else{
    this.autservice.signup(email,password).subscribe(resData =>{
      console.log(resData);
  
    },
    error =>{
      console.log(error);
    });
  
    form.reset();
  
  }
    
}}



 