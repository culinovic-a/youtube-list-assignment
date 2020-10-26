import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/shared/models/video';
import { VideoService } from '../../shared/services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list-item',
  templateUrl: './video-list-item.component.html',
  styleUrls: ['./video-list-item.component.scss']
})
export class VideoListItemComponent implements OnInit {
  @Input() video: Video;

  constructor(private videoService: VideoService, private router: Router) { }

  ngOnInit(): void {
  }

  playVideo(video: Video): void {
    this.videoService.playVideo(video);
  }

}
