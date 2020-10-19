import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService } from './services/video.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [VideoService]
})
export class SharedModule { }
