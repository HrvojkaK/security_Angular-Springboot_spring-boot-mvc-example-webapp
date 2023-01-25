import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(id:number, password:string) { 
    if (password === "password") { 
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
