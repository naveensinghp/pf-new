import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SkillsComponent} from './skills/skills.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BlogsComponent } from './blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    HomepageComponent,
    SkillsComponent,
    ContactComponent,
    MyNavbarComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
