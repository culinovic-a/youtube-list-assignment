import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../shared/services/video.service';
import { Video } from '../../shared/models/video';
import { MatDialog } from '@angular/material/dialog';
import { EditVideoComponent } from '../edit-video/edit-video.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play-video',
  templateUrl: './play-video.component.html',
  styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit {
  playVideo: any;

  constructor(private videoService: VideoService, private matDialog: MatDialog, private router: Router) {
    this.getData();
  }

  ngOnInit(): void {
    this.videoService.youtubePlayer();
  }

  edit(video: Video): void {
    const dialogRef = this.matDialog.open(EditVideoComponent, {
      data: {
        name: video.name,
        description: video.description,
        author: video.author,
        link: video.link,
        shortLink: video.shortLink
      },
      disableClose: true,
      autoFocus: true,
      height: '650px',
      width: '600px',
    });
  }

  delete(video: Video): void {
    this.videoService.deleteVideo(video);
  }

  getData() {
    this.playVideo = this.videoService.sharedData;
    return this.playVideo;
  }

}
