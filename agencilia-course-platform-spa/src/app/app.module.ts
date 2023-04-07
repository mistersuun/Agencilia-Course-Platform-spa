import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { FooterComponent } from './pages/home/footer/footer.component';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { ProjectCardComponent } from './pages/home/project-card/project-card.component';
import { ProjectsComponent } from './pages/home/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    ProjectCardComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
