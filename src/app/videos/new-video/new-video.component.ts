import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VideoService } from '../../shared/services/video.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-video',
  templateUrl: './new-video.component.html',
  styleUrls: ['./new-video.component.scss']
})
export class NewVideoComponent implements OnInit {
  newVideoForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private videoService: VideoService,
    public dialogRef: MatDialogRef<NewVideoComponent>) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.newVideoForm = this.fb.group({
      name: '',
      description: '',
      author: '',
      link: '',
      shortLink: ''
    });
  }
  onSubmit(): void {
    this.cutLink();
    this.videoService.createNewVideo(this.newVideoForm.value);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  cutLink(): void {
    const videoId = this.newVideoForm.value.link.split(/[=&]/);
    this.newVideoForm.value.shortLink = videoId[1];
  }

}
