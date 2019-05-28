import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  model:any;
  constructor () {}
  ngOnInit(){
this.model =
  [
 {
  "skillId": 1,
  "technology": "HTML",
  
  "Experience": "2 year",
  
  "starRating": 3.2,
  
},
{
  "skillId": 2,
  "technology": "CSS",
  "Experience": "2 year",
  "starRating": 4.2,

},
{
  "skillId": 3,
  "technology": "Bootstrap",
  "Experience": "2 year",
  "starRating": 4.2,

},
{
  "skillId": 4,
  "technology": "wordpress",
  "Experience": "2 year",
  "starRating": 4.7,

}
];}}

