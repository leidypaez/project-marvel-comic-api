import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './componets/landing-page/landing-page.component';
import { HeaderComponent } from './componets/header/header.component';
LandingPageComponent



const routes: Routes = [
  {path: "", component:LandingPageComponent},
  {path: "Home", component:LandingPageComponent},
  {path: "header", component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
