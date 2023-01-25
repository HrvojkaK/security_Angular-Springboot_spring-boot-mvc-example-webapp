import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { MemberListComponent } from './components/member-list/member-list.component'
import { MemberService } from './service/member.service';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { FormsModule } from '@angular/forms';
import { UpdateMemberComponent } from './components/update-member/update-member.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    AddMemberComponent,
    UpdateMemberComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
