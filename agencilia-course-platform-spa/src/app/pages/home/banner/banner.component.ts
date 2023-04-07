import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  loopNum: number = 0;
  isDeleting: boolean = false;
  text: string = '';
  delta: number = 300 - Math.random() * 100;
  index: number = 1;
  toRotate: string[] = [ "Digital Marketing", "Ads", "SEO" ];
  period: number = 2000;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    setInterval(() => {
      this.tick();
    }, this.delta);
  }

  tick() {
    let i = this.loopNum % this.toRotate.length;
    let fullText = this.toRotate[i];
    let updatedText = this.isDeleting ? fullText.substring(0, this.text.length - 1) : fullText.substring(0, this.text.length + 1);

    this.text = updatedText;

    if (this.isDeleting) {
      this.delta = this.delta / 2;
    }

    if (!this.isDeleting && updatedText === fullText) {
      this.isDeleting = true;
      this.index--;
      this.delta = this.period;
    } else if (this.isDeleting && updatedText === '') {
      this.isDeleting = false;
      this.loopNum++;
      this.index = 1;
      this.delta = 500;
    } else {
      this.index++;
    }
  }
}
