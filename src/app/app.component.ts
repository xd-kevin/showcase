import { Component, ElementRef } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  videoNames = [];
  config = null;
  selectedName = this.videoNames[0];
  isSelectedVideoImageWidth$;

  constructor(private elmRef: ElementRef, private http: HttpClient) {
    this.isSelectedVideoImageWidth$ = new Subject();
    this.getVideoNames().subscribe(data => {
      this.videoNames = Object.keys(data);
      this.config = data;
    });
  }

  handleVideoChange() {
    const player = this.elmRef.nativeElement.querySelector("video");
    if (player) player.load();
    this.getImageDimension(
      this.config[this.selectedName].gif[0] ||
        this.config[this.selectedName].thumb[0]
    );
  }

  getImageDimension(src) {
    const img = new Image();
    const isSelectedVideoImageWidth$ = this.isSelectedVideoImageWidth$;
    img.onload = function(event) {
      const loadedImage: any = event.currentTarget;
      isSelectedVideoImageWidth$.next(loadedImage.width >= loadedImage.height);
    };
    img.src = `./assets/gif/${src}`;
  }

  public getVideoNames(): Observable<any> {
    return this.http.get("./assets/videoNames.json");
  }
}
