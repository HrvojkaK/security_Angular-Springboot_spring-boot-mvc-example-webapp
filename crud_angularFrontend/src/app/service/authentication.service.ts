import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from './member.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private memberService:MemberService, private router: Router){}

  respFromBack!:String;
 

  authenticate(id:number, password:string) { 
    this.memberService.checkPassword(id, password).subscribe((response:any)=>{ this.respFromBack=response; console.log(response); });
    if (this.respFromBack === "correct") { //
      localStorage.setItem('id', String(id)) //key,value pairs must be strings //sessionStorage is just for tab, local for browser  
      return true;
    } else {
      return false;
    }

  }

  isUserLoggedIn() {
    let user = localStorage.getItem('id') 
    console.log(!(user === null)) 
    return !(user === null) 
  }

  logOut() {
    localStorage.removeItem('id') 
  }
}