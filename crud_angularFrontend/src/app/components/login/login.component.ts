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
//  invalidLogin = false;
  id!:number; ///

  constructor(private router: Router, private actRoute:ActivatedRoute, ///actRoute!
    private authenticationService: AuthenticationService,
    private memberService: MemberService) { }


  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id']; ///
  }

  checkLogin() {
//  if (this.authenticationService.authenticate(this.id, this.password) 
//  ) {
//    this.router.navigate(['/update-member', this.id]) ///
//    this.invalidLogin = false
//  } else
//    this.router.navigate(['/member-list'])
//    this.invalidLogin = true
//}

    this.authenticationService.authenticate(this.id,this.password);
  }


}


