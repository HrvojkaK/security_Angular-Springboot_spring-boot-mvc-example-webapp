import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { MemberService } from './member.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private memberService:MemberService, private router: Router){}

  respFromBack!:String;
  

  authenticate(id:number, password:string) {
    
    this.memberService.checkPassword(id, password).subscribe((response:any)=>{ this.respFromBack=response; 
      console.log(response); 

      if (response === "correct") { 
        console.log(response)
        localStorage.setItem('id', String(id)) //key,value pairs must be strings //sessionStorage is just for tab, local for browser  
        this.router.navigate(['/update-member', id])
      } else {
        console.log(response)
        this.router.navigate(['/logout']); //just dump the member back to member-list page if username incorrect
      }
    });

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