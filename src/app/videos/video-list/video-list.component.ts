import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/models/video';
import { VideoService } from '../../shared/services/video.service';
import { MatDialog } from '@angular/material/dialog';
import { NewVideoComponent } from '../new-video/new-video.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  videosList: Video[] = [];

  constructor(private videoService: VideoService, private matDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos() {
    this.videosList = this.videoService.getVideos();
    console.log(this.videosList);
  }

  openDialog(): void {
    const dialogRef = this.matDialog.open(NewVideoComponent, {
      height: '390px',
      width: '450px',
    });
  }

}
