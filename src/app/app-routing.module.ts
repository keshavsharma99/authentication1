import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';


const routes: Routes = [
  {path: '', redirectTo: '/skills', pathMatch: 'full'},
  {path: 'skills', component:SkillsComponent},
  {path: 'Experience', component:ExperienceComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
