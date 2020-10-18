import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewVideoComponent } from './new-video/new-video.component';
import { PlayVideoComponent } from './play-video/play-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';



@NgModule({
  declarations: [NewVideoComponent, PlayVideoComponent, EditVideoComponent],
  imports: [
    CommonModule
  ]
})
export class VideosModule { }
