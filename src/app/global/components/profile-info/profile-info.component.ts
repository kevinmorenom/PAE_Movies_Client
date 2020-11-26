import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  form: FormGroup;
  file: File;

  
  watched=[];
  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      image: ['', Validators.required]
    })
    this.getWatched();
  
  }

  onFileChange(){
    // this.file = <File>event.target.file[0];
    
    if(!this.form){return;}
    const values = this.form.getRawValue();
    console.log(values);
  }

  getWatched(){
    this.userService.getWatched().then(data =>{
      this.watched = data;
      console.log(data);
    }).catch(err =>{
      console.log(err);
    })
  }

}
