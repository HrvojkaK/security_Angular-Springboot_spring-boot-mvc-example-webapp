import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../model/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:8080/members";


  getMembersList(){
    return this.http.get(this.baseUrl);
  }

  getMember(id:number){
    return this.http.get(this.baseUrl+"/"+id);
  }

  createMember(member:Member){
    return this.http.post(this.baseUrl, member);
  }

  updateMember(member:Member){
    return this.http.put(this.baseUrl, member);
  }

  deleteMember(id:number){
    return this.http.delete(this.baseUrl+"/"+id);
  }
  

}
