import { Component, Input, OnInit } from '@angular/core';
import {AnimationOptions, LottieComponent} from 'ngx-lottie';
import {AnimationItem} from 'lottie-web';
import {NgIf, NgStyle} from '@angular/common';


@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  imports: [LottieComponent, NgIf, NgStyle],
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  @Input() public url!: string;
  @Input() public alt: string = '';


  ngOnInit(): void {
    if (!this.url) {

    }
  }

  private animationItem: AnimationItem | undefined;

  options: AnimationOptions = {
    path: '/assets/loading.json',
    loop: true,
    autoplay: true
  };

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  onLoad(): void {

    setTimeout(() => {
      this.hasLoaded = true;
    },1000)
  }

  public hasLoaded : boolean = false;


}
