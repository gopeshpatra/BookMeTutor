import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../Request/login';
import { AuthenticateService } from 'src/app/Auth/authenticate.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  error:String;
  rememberCheck:boolean
  constructor(private authenticationService:AuthenticateService,
               private router:Router) { }

  ngOnInit() {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl ('', Validators.required),
      isRememberMe:new FormControl(false),
     role:new FormControl('',Validators.required)
      
 });
  }
  login=new Login();
  loginSubmit()
  {
    if(this.loginForm.invalid){return}
    this. login.email=this.loginForm.get('email').value;
    this.login.password=this.loginForm.get('password').value;
    this.login.role=this.loginForm.get('role').value;
   this.login.isRememberMe=this.loginForm.get('isRememberMe').value.toString()
 
    
    console.log(this.login)

  this.authenticationService.createLoginPost(this.login).subscribe(
   (response:any)=>{
         console.log(response)
         localStorage.setItem('token','Bearer '+response.jwtToken)
         localStorage.setItem('role',this.login.role)
         localStorage.setItem('mail',this.login.email)
         localStorage.setItem('isRememberMe',this.login.isRememberMe)
         if(this.login.role==='student')
         this.router.navigate(['/userpage/booking'])
         else if(this.login.role==='tutor')
         this.router.navigate(['/tutorpage/tutorbookings'])
       
      },
   
      error=>{alert("Email/Password is incorrect or not verified")
             console.log(error)
            }
  )
   
    this.loginForm.reset();

  }

}
