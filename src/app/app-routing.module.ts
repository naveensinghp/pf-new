import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [


  
  { path: '', component: HomepageComponent  },
  { path: 'skills', component: SkillsComponent  },
  { path: 'contact', component: ContactComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
