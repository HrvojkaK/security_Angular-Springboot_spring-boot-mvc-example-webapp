import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MemberService } from 'src/app/service/member.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password = '';
  id!:number; 

  constructor(private router: Router, private actRoute:ActivatedRoute, 
    private authenticationService: AuthenticationService,
    private memberService: MemberService) { }


  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id']; 
  }

  checkLogin() {
    this.authenticationService.authenticate(this.id,this.password);
  }


}


