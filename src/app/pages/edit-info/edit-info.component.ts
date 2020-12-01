import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../global/services/user/user.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {
  form: FormGroup;
  file: File;
  user: any;
  url = environment.apiUrl;
  form2: FormGroup
  update: boolean;

  constructor(private formBuilder: FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.form2 = this.formBuilder.group({
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, {
        validators: this.compararPasswords.bind(this)
      });

      this.form = this.formBuilder.group({
        image: []
      })

  }

  compararPasswords() {
    //If there is no form at all, do nothing
    if (!this.form2) { return; }
    //Compare both passwords
    const values = this.form2.getRawValue();
    if (values.contraseña === values.confirmPassword) {
      return null;
    }
    else {
      return { mismatch: true }
    }
  }

  onFileChange(event){
    // this.file = <File>event.target.file[0];
    if (event.target.files.length > 0) {
      console.log(event);
      const file = event.target.files[0];
      this.form.get('image').setValue(file);
      console.log(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.form.get('image').value);
    console.log('Form data', formData)
    this.userService.setImage(formData).then(data => {
      console.log(data);
      
    }).catch(err =>{
      console.log(err);
      
    } )
    // this.post<any>(this.SERVER_URL, formData).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );
  }

  getUser(){
    this.userService.getUserByToken().then(data => {
      this.user = data;
      console.log("This is the data:", data)
    }).catch(err => {
      console.log(err);
      if(err.status == "401") {console.log("redirect register")
      localStorage.removeItem('token');
      this.router.navigate(['/'])};
    })
  }

  setPassword(){
    if (this.form2.valid) {
      console.log("Update password...")
      this.userService.setPassword(this.form2.getRawValue()).then(res => {  
        console.log(res);
        if (res) {
          console.log(res);
          this.update = true;
        }
      }).catch(err => {
        console.log("Error to update psw", err)
      })
    } else {
      console.log("missing data psw...");
    }
  }

}
