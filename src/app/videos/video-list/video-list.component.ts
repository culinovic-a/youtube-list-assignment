import { Component, OnInit, OnDestroy } from '@angular/core';
import { Video } from 'src/app/shared/models/video';
import { VideoService } from '../../shared/services/video.service';
import { MatDialog } from '@angular/material/dialog';
import { NewVideoComponent } from '../new-video/new-video.component';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit, OnDestroy {
  public videosList: Video[];
  private readonly destroy = new Subject();

  constructor(private videoService: VideoService, private matDialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos() {
    this.videoService.getVideos().pipe(takeUntil(this.destroy)).subscribe(data => {
      this.videosList = data;
    });
    return this.videosList;
  }

  openDialog(): void {
    const dialogRef = this.matDialog.open(NewVideoComponent, {
      height: '500px',
      width: '450px',
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
