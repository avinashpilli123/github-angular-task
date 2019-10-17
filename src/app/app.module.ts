import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';


import { UserComponent } from './user/user.component';
import { UserRepoComponent } from './user-repo/user-repo.component';


@NgModule({
 declarations: [
   AppComponent,
  UserComponent,
  UserRepoComponent,
   FilterPipe

 ],
 imports: [
   BrowserModule,
   HttpClientModule,
   FormsModule,
   RouterModule.forRoot([
     {path: '', pathMatch: 'full', redirectTo: 'user'},
     { path: 'user', component: UserComponent },
     { path: 'user/:userName', component: UserRepoComponent },
     { path: 'user', component: UserComponent }
   ])
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }