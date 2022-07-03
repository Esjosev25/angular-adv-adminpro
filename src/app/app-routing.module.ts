import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Modulos
import { PagesRoutingModule } from './pages/pages.routing';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';
import { PagesModule } from './pages/pages.module';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  //path: /dashboard =>  PagesRoutingModule
  //path: /login - /register =>  AuthRoutingModule

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotpagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
