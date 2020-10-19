import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { PlayVideoComponent } from './play-video/play-video.component';
import { NewVideoComponent } from './new-video/new-video.component';
import { VideoListComponent } from './video-list/video-list.component';

const routes: Routes = [
  {
    path: '',
    component: VideoListComponent
  },
  {
    path: 'video-list',
    component: VideoListComponent
  },
  {
    path: 'new-video',
    component: NewVideoComponent
  },
  {
    path: 'play-video',
    component: PlayVideoComponent
  },
  {
    path: 'edit-video',
    component: EditVideoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
