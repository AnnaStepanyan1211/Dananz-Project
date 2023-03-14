import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { OurTeamsComponent } from './our-teams/our-teams.component';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'our-team', component: OurTeamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MatToolbarModule],
})
export class AppRoutingModule {}
export const RoutingComponent = [
  HomeComponent,
  AboutUsComponent,
  ServicesComponent,
  OurTeamsComponent,
];
