import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { UpdateMemberComponent } from './components/update-member/update-member.component';
import { GuardService } from './service/guard.service';

const routes: Routes = [
  {path:"member-list",
   component: MemberListComponent},
   {path:"add-member",
   component: AddMemberComponent},
   {path:"update-member/:id",
   component: UpdateMemberComponent, canActivate:[GuardService]},
   {path: 'login/:id', component: LoginComponent },
   {path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
