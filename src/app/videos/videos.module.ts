import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewVideoComponent } from './new-video/new-video.component';
import { PlayVideoComponent } from './play-video/play-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideosRoutingModule } from './videos-routing.module';

@NgModule({
  declarations: [NewVideoComponent, PlayVideoComponent, EditVideoComponent, VideoListComponent],
  imports: [
    CommonModule,
    VideosRoutingModule
  ]
})
export class VideosModule { }
