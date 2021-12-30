import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search-hotel',
    pathMatch: 'full'
  },
  {
    path: 'search-hotel',
    component: SearchHotelComponent
  },
  {
    path: 'add-hotel',
    component: AddHotelComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
