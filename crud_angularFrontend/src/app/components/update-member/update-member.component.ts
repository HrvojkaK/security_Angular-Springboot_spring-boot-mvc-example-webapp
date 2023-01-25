import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/app/model/member';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  constructor(private memberService:MemberService, private router: Router, private actRoute:ActivatedRoute){}

  id!:number;
  member = new Member();

  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id']; 
    this.memberService.getMember(this.id).subscribe((response:any)=>{ this.member=response; console.log(response); });
  }

  saveMember(form: NgForm){
    if (form.invalid) {
      return;
    } //else:
    this.memberService.updateMember(this.member).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/member-list']);
    });
  }

}
