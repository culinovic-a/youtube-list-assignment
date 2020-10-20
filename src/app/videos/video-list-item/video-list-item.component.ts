import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Video } from 'src/app/shared/models/video';
import { VideoService } from '../../shared/services/video.service';
import { EditVideoComponent } from '../edit-video/edit-video.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.scss']
})
export class VideoListItemComponent implements OnInit {
  @Input() video: Video;

  constructor(private videoService: VideoService, private matDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  edit(): void {
    const dialogRef = this.matDialog.open(EditVideoComponent, {
      data: {
        name: this.video.name,
        description: this.video.description,
        author: this.video.author,
        link: this.video.link,
        isEdit: true,
      },
      disableClose: true,
      autoFocus: true,
      height: '700px',
      width: '550px',
    });
    // this.router.navigateByUrl('edit-video');
  }

  delete(video: Video): void {
    this.videoService.deleteVideo(video);
  }

}
