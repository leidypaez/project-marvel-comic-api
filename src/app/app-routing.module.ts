import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './componets/landing-page/landing-page.component';
import { HomeComponent } from './componets/home/home.component';
import { HeaderComponent } from './componets/header/header.component';



const routes: Routes = [
  {path: "", component:LandingPageComponent},
  {path: "home", component:HomeComponent},
  {path: "header", component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
