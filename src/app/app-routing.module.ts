import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GryffindorComponent } from './gryffindor/gryffindor.component';
import { HufflepuffComponent } from './hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './slytherin/slytherin.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: 'gryffindor', component:GryffindorComponent},
  {path: 'hufflepuff', component:HufflepuffComponent},
  {path: 'ravenclaw', component:RavenclawComponent},
  {path: 'slytherin', component:SlytherinComponent},
  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
