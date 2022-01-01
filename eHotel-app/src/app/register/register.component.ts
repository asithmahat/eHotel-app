import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form , Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname:['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required],
      password:['', Validators.required],
      loggedin:['false']
    })
  }

  registerUser() {
    this.http.post<any>("http://localhost:3000/users", this.registerForm.value)
    .subscribe(res=>{
      alert("Registration Successful!");
      this.registerForm.reset();
      this.router.navigate(['login']);
    },err=>{
      alert('Something Went Wrong!')
    })
  }
}