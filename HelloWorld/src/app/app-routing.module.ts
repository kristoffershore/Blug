import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ViewpostsComponent } from './viewposts/viewposts.component';


const routes: Routes = [
  {
    path: '',
    component: ViewpostsComponent
  },
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'NewUser',
    component: NewuserComponent
  },
  {
    path: 'createpost',
    component: CreatepostComponent
  },
  {
  path: 'editpost',
  component: EditpostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
