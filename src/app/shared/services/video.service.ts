import { Injectable } from '@angular/core';
import { Video } from '../models/video';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videos: any;
  public sharedData: Video[] = [];

  constructor(private router: Router) {
  }

  // GET VIDEOS
  getVideos(): Observable<Video[]> {
    if (localStorage.getItem('videos') === null) {
      this.videos = [];
    } else {
      this.videos = JSON.parse(localStorage.getItem('videos'));
    }
    return of(this.videos);
  }

  // CREATE VIDEO
  createNewVideo(video: Video): Observable<Video> {
    if (localStorage.getItem('videos') === null) {
      this.videos = [];
      localStorage.setItem('videos', JSON.stringify(this.videos));
    } else {
      this.videos.push(video);
      localStorage.setItem('videos', JSON.stringify(this.videos));
    }
    return this.videos;
  }

  // DELETE VIDEO
  deleteVideo(video: Video): void {
    for (let i = 0; i < this.videos.length; i++) {
      if (video === this.videos[i]) {
        this.videos.splice(i, 1);
        localStorage.setItem('videos', JSON.stringify(this.videos));
      }
    }
    this.router.navigateByUrl('video-list');
  }

  // UPDATE VIDEO
  updateVideo(oldText: string, newText: Video): Observable<Video> {
    for (let i = 0; i < this.videos.length; i++) {
      if (this.videos[i].name === oldText) {
        this.videos[i] = newText;
      }
      localStorage.setItem('videos', JSON.stringify(this.videos));
    }
    this.sharedData[0] = newText;
    return this.videos;
  }

  // PLAY VIDEO
  playVideo(video: Video): void {
    // tslint:disable-next-line: prefer-for-of
    this.sharedData = [];
    for (let i = 0; i < this.videos.length; i++) {
      if (video === this.videos[i]) {
        this.sharedData.push(video);
      }
    }

    this.router.navigateByUrl('play-video');
  }

  // YOUTUBE PLAYER COMPONENT
  youtubePlayer(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
