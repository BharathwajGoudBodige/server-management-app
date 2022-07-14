import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerService } from './services/server.service';
import { RouterModule, Routes } from '@angular/router';
import { PagNotFoundComponent } from './pag-not-found/pag-not-found.component';
import { UserService } from './services/user.service';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'servers',component:ServersComponent},
  {path:'users',component:UsersComponent},
  {path:'not-found',component:PagNotFoundComponent},
  {path:'**',redirectTo:'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ServersComponent,
    ServerComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    PagNotFoundComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [ServerService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
