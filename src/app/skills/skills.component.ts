import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private router:Router) {

  	let skill = this.router.url;
  	console.log(skill);
  }

  ngOnInit() {
  }

}
