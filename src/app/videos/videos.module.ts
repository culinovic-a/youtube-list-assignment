import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewVideoComponent } from './new-video/new-video.component';
import { PlayVideoComponent } from './play-video/play-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideosRoutingModule } from './videos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { VideoListItemComponent } from './video-list-item/video-list-item.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

const VIDEOS_MAT_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTooltipModule,
  MatIconModule,
  MatDialogModule,
  MatTableModule
];

@NgModule({
  declarations: [NewVideoComponent, PlayVideoComponent, EditVideoComponent, VideoListComponent, VideoListItemComponent],
  imports: [
    CommonModule,
    VideosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    VIDEOS_MAT_MODULES,
    YouTubePlayerModule
  ]
})
export class VideosModule { }
