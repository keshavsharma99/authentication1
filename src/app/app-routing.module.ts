import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { AutComponent } from './aut/aut.component';


const routes: Routes = [
  {path: '', redirectTo: '/skills', pathMatch: 'full'},
  {path: 'skills', component:SkillsComponent},
  {path: 'Experience', component:ExperienceComponent},
  {
    path: 'aut', component:AutComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
