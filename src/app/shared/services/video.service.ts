import { Injectable } from '@angular/core';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videos: Video[] = [];

  constructor() { }

  // GET VIDEOS
  getVideos() {
    if (localStorage.getItem('videos') === null) {
      this.videos = [];
    } else {
      this.videos = JSON.parse(localStorage.getItem('videos'));
    }
    return this.videos;
  }

  // CREATE VIDEO
  createNewVideo(video: Video): void {
    this.videos.push(video);
    let videos = [];
    if (localStorage.getItem('videos') === null) {
      videos = [];
      videos.push(video);
      localStorage.setItem('videos', JSON.stringify(videos));
    } else {
      videos = JSON.parse(localStorage.getItem('videos'));
      videos.push(video);
      localStorage.setItem('videos', JSON.stringify(videos));
    }
  }

  // DELETE VIDEO
  deleteVideo(video: Video): void {
    for (let i = 0; i < this.videos.length; i++) {
      if (video === this.videos[i]) {
        this.videos.splice(i, 1);
        localStorage.setItem('videos', JSON.stringify(this.videos));
      }
    }
  }

  // UPDATE VIDEO

}
