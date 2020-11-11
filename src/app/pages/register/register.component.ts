import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['', Validators.required]
    })
  }

  loginUser(){
    if(this.form.valid){
      console.log("Login exitoso...!");
    }else{
      console.log("Faltan datos... :(");
    }
  }

}
