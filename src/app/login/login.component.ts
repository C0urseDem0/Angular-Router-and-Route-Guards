import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
ngOnInit(): void {
 this.activatedRoute.queryParamMap.subscribe(q=>{
 const logout=Boolean( q.get('logout'))
 if(logout)
{ this.authService.logout()
alert('you are now logout')
}

 })
}
@ViewChild('username') username:ElementRef
@ViewChild('password') password:ElementRef
authService:AuthService=inject(AuthService)
router:Router=inject(Router)
activatedRoute:ActivatedRoute=inject(ActivatedRoute)
OnLoginClick(){
  const username = this.username.nativeElement.value
  const password=this.password.nativeElement.value
  
  const user=this.authService.login(username,password)
  if(user===undefined)
{
  alert('Invalid credintal')
}
  else{
    alert('welcom '+username+' you are logged in')
    this.router.navigate(['/Courses'])
  }
}
}
