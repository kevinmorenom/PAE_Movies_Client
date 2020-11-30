import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  form: FormGroup;
  file: File;
  user: any;
  url = environment.apiUrl;
  
  watched=[];
  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      image: []
    })
    this.getUser();
  
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
    })
  }

}
