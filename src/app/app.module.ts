import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { Routes } from '@angular/router';
import { AutComponent } from './aut/aut.component';
const appRoutes: Routes = [
 
];
@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ExperienceComponent,
    AutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
