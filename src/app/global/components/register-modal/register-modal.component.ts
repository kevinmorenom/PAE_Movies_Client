import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionsService } from '../../services/sessions/sessions.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private session:SessionsService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      usuario: ['', Validators.required],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
        validators: this.compararPasswords.bind(this)
      });
  }

  createUser() {
    if (this.form.valid) {
      console.log("Crear usuario...")
      this.session.signUp(this.form.getRawValue()).then().catch(err =>{
        console.log("Error to sign up", err)
      })
    } else {
      console.log("Te faltan datos...");
    }
  }

  //Methot to compare passwords in order to confirm validators
  compararPasswords() {
    //If there is no form at all, do nothing
    if(!this.form) { return; } 
    //Compare both passwords
    const values = this.form.getRawValue();
    if (values.contraseña === values.confirmPassword) {
      return null;
    }
    else {
      return { mismatch: true }
    }
  }
}
