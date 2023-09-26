import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ShowsComponent } from './shows/shows.component';
import { TracksComponent } from './tracks/tracks.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'gallery', component: GalleryComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'tracks', component: TracksComponent},
  {path: 'contact', component: ContactComponent},
  {path:'**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
