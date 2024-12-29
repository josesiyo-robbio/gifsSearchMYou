import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public lottieConfig: any = null;

  ngOnInit(): void {
    if (!this.url) {
      this.lottieConfig = {
        path: 'assets/loading-animation.json', // Ruta del archivo JSON de la animación
        renderer: 'svg',
        autoplay: true,
        loop: true,
      };

      console.warn('URL is missing. Showing Lottie animation instead.');
    }
  }
}
