import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/model/member';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  members!:Member[];

  constructor(private memberService:MemberService){}

  ngOnInit(){
    this.memberService.getMembersList().subscribe((response:any) => {this.members=response;});
  }

  deleteMember(id:number){
    this.memberService.deleteMember(id).subscribe((response) => {
      console.log(response);
      this.memberService.getMembersList().subscribe((response:any) => {this.members=response;});
     //window.location.reload(); //dirty 
    });

  }
}  
