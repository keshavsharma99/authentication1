import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-aut',
  templateUrl: './aut.component.html',
  styleUrls: ['./aut.component.css']
})
export class AutComponent implements OnInit {
  isLoginMode = true;

  onSwitchMode(){

    this.isLoginMode = !this.isLoginMode;
  }
onSubmit(form: NgForm){
  console.log(form.value);
  form.reset();

}
  constructor() { 

  }

  ngOnInit() {
  }

}
