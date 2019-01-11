import {Component, ElementRef} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '视频封面抽取';
  videoNames = [
    '1047_2ffed9a44fce4b3fa48ee64ca6dcvide0',
    '1047_3ff64346edb7438490914a6c5d23vide0',
    '1047_4fcd93d4a5f440d5bc7ce8b23044vide0',
    '1047_72d66ef781bd4dafbea140b8df4evide0',
    '1047_729f7ceafe7c419cb470ef2d496bvide0',
    '1047_4877dbdb9abc46f49aaa7aa06115vide0',
    '1047_ada5b738aae74c438a0a19a451bavide0',
    '1047_b29e9c539e7c4959ba2a7f1e7a02vide0',
    '1047_de76c9a3cc384f90aa613c2194fbvide0',
    '1047_fbefbefb2a764839a286ed3f736bvide0',
    'shg_93304989_1047_49d387ca49b2488aab30e7054a96vide0',
    'shg_472708436_1047_1eda60008859432b979b7155a9b5vide0',
    'shg_658186741_1047_1475e7fb7b0a403f968e2848fe53vide0',
    'shg_1070358327_1047_1be5b3d25ef24412acb893fb3bfcvide0',
    'shg_1116961427_1047_1aa3cfdba6dd410cb57907dc8849vide0',
    'shg_1281039150_1047_43785cae0eb24a58b161b8ddeb9bvide0',
    'shg_1311423411_1047_8d9b5196f5da49c3afc3ad37ce07vide0',
    'shg_1330740161_1047_fb56a4d2725a45a49a32dad9c89dvide0',
    'shg_1380276323_1047_93407e4b6dd54418a13107b18806vide0',
    'shg_1761309749_1047_28f493fd3460482bb545fac82e99vide0',
    'shg_2146973187_1047_cc04c4595b9646b88fbff539b262vide0',
    'tjg_256134490_1047_3f4409522385446a9e19b55d859fvide0',
    'tjg_260121748_1047_6624588630224bd9beef3cc3910cvide0',
    'tjg_568113310_1047_1b7d6f1d492d43b08157ccf502b3vide0',
    'tjg_671130620_1047_78e8cb6824024a968c34f4e1871bvide0',
    'tjg_1135081752_1047_33a9c52aa1ef4f4fb995f3da3ed9vide0',
    'tjg_1374745472_1047_3041a09a3dec4b509cfc58f6691evide0',
    'tjg_1560362132_1047_683193c0bb534fa38eee421c15devide0',
    'tjg_1692110052_1047_08af07c4789945b28e2993fc367bvide0',
    'tjg_2025270294_1047_7cf540b559f2455ba482f4961eeevide0',
    'tjg_2095269251_1047_0dafac68c5b643b49270a25a314cvide0'
  ];
  selectedVideo = this.videoNames[0];
  isSelectedVideoImageWidth$;
  isWidth = false;

  constructor(private elmRef: ElementRef) {
    this.isSelectedVideoImageWidth$ = new Subject();
    this.isSelectedVideoImageWidth$.subscribe(isWidth => {
      this.isWidth = isWidth;
    });
  }

  handleVideoChange() {
    const player = this.elmRef.nativeElement.querySelector('video');
    player.load();
    this.getImageDimension(this.selectedVideo);
  }

  getImageDimension(src) {
    const img = new Image();
    const isSelectedVideoImageWidth$ = this.isSelectedVideoImageWidth$;
    img.onload = function (event) {
      const loadedImage: any = event.currentTarget;
      isSelectedVideoImageWidth$.next(loadedImage.width >= loadedImage.height);
    };
    img.src = `./assets/gif/${src}_00.gif`;
  }
}
