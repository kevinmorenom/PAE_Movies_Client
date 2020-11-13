import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionsService } from '../../global/services/sessions/sessions.service';
import { AuthService } from '../../global/services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;

  loginError:boolean;

  constructor(private formBuilder:FormBuilder, private sessions:SessionsService, private auth:AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      correo:['',[Validators.required, Validators.email]],
      contraseña:['', Validators.required]
    })
  }

  login(){
    if(this.form.valid){
      console.log("Login exitoso...!", this.form.getRawValue());
      this.sessions.login(this.form.getRawValue()).then(response =>{
        console.log("Login...", response.token);
        //We make pass the response to the auth service which has a methof of save that takes that reponse (the token) and saves it in local Storage
        this.auth.save(response);
        this.loginError = false;
      }).catch(err =>{
        console.log("Error login in", err);
        this.loginError = true;
      })
    }else{
      console.log("Faltan datos... :(");
    }
  }

}
