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

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditVideoComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.link = data.link;
  }

  ngOnInit(): void {
    this.buildEditForm();
  }

  buildEditForm(): void {
    this.editForm = this.fb.group({
      name: this.name,
      description: this.description,
      author: this.author,
      link: this.link,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
