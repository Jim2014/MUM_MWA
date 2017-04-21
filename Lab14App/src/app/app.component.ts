import { Component } from '@angular/core';
import { MyhttpService } from './myhttp.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab14';
  myForm:FormGroup;

  constructor(private myhttp:MyhttpService,private formBuilder: FormBuilder){
    this.myForm = formBuilder.group({      
        'name': ['', [Validators.required]],
        'email': ['', [
          Validators.required,
          Validators.email
        ]],
        'post': ['', [
          Validators.required,
          Validators.minLength(10)
        ]]
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
     this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );
  
  }


  onGetData(){
    this.myhttp.getUser().subscribe(
      response=>{
        this.myForm.value.email = response.json().email;
        this.myForm.value.name = response.json().name;
        },
      error=>{console.log(error)},
      ()=>{console.log('get user data finished')}
    );
    this.myhttp.getPosts().subscribe(
      response=>{
        this.myForm.value.post = response.json()[0].body;
      },
      error=>{console.log(error)},
      ()=>{console.log('get post data finished')}
    );
  }

  onSubmit(){
     console.log(this.myForm.value);
  }


}
