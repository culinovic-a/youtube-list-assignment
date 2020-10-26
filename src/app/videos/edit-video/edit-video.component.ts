import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { VideoService } from '../../shared/services/video.service';

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.scss']
})
export class EditVideoComponent implements OnInit {
  editForm: FormGroup;

  name: string;
  description: string;
  author: string;
  link: string;
  shortLink: string;

  constructor(private videoService: VideoService, private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditVideoComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.link = data.link;
    this.shortLink = data.shortLink;
  }

  ngOnInit(): void {
    this.buildEditForm();
    this.videoService.youtubePlayer();
  }

  buildEditForm(): void {
    this.editForm = this.fb.group({
      name: this.name,
      description: this.description,
      author: this.author,
      link: this.link,
      shortLink: this.shortLink
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.cutLink();
    this.videoService.updateVideo(this.name, this.editForm.value);
    this.onNoClick();
  }

  cutLink(): void {
    const videoId = this.editForm.value.link.split(/[=&]/);
    this.editForm.value.shortLink = videoId[1];
  }

}
