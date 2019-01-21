import { Component, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  videoNames = [];
  config = null;
  selectedNameIndex = 0;
  selectedName = '';
  isSelectedVideoImageWidth$;
  score = {};

  constructor(private elmRef: ElementRef, private http: HttpClient) {
    this.isSelectedVideoImageWidth$ = new Subject();
    this.getVideoNames().subscribe(data => {
      this.videoNames = Object.keys(data);
      this.selectedNameIndex = 0;
      this.selectedName = this.videoNames[this.selectedNameIndex];
      this.config = data;
    });
    this.getScore().subscribe(data => {
      this.score = data;
    });
  }

  updateVideo() {
    this.selectedName = this.videoNames[this.selectedNameIndex];
    const player = this.elmRef.nativeElement.querySelector('video');
    if (player) {
      player.load();
    }
    this.getImageDimension(
      this.config[this.selectedName].gif[0] || this.config[this.selectedName].thumb[0]
    );
  }

  handleVideoChange(id) {
    if (id >= 0 && id < this.videoNames.length) {
      this.selectedNameIndex = id;
      this.updateVideo();
    }
  }

  parseInt(id) {
    return parseInt(id, 10);
  }

  private getImageDimension(src) {
    const img = new Image();
    const isSelectedVideoImageWidth$ = this.isSelectedVideoImageWidth$;
    img.onload = function(event) {
      const loadedImage: any = event.currentTarget;
      isSelectedVideoImageWidth$.next(loadedImage.width >= loadedImage.height);
    };
    img.src = `./assets/gif/${src}`;
  }

  private getVideoNames(): Observable<any> {
    return this.http.get('./assets/videoNames.json');
  }

  private getScore(): Observable<any> {
    return this.http.get('./assets/score.json');
  }
}
