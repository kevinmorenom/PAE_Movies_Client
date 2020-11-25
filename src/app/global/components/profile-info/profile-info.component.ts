import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {
  form: FormGroup;
  file: File;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      image: ['', Validators.required]
    })
  }

  onFileChange(){
    // this.file = <File>event.target.file[0];
    
    if(!this.form){return;}
    const values = this.form.getRawValue();
    console.log(values);
  }

}
