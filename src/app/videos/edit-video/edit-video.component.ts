import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditVideoComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.link = data.link;
    const videoId = this.link.split(/[=&]/);
    this.shortLink = videoId[1];
  }

  ngOnInit(): void {
    this.buildEditForm();

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  buildEditForm(): void {
    this.editForm = this.fb.group({
      name: this.name,
      description: this.description,
      author: this.author,
      link: this.link,
      // shortLink: this.shortLink
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.editForm.value);
  }

}
