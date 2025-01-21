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
export class LazyImageComponent implements OnInit
{
  //CLASS PROPERTIES
  private animationItem: AnimationItem | undefined;
  public hasLoaded : boolean = false;
  @Input() public url!: string;
  @Input() public alt: string = '';

  options: AnimationOptions = {
    path: '/assets/loading.json',
    loop: true,
    autoplay: true
  };



  //CONSTRUCTOR (NA)



  //GETTERS & SETTERS (NA)



  //METHODS
  animationCreated(animationItem: AnimationItem): void
  {
    this.animationItem = animationItem;
  }

  onLoad(): void
  {
    setTimeout(() : void => {
      this.hasLoaded = true;
    },1000)
  }



  //LIFECYCLE HOOKS
  ngOnInit(): void
  {
    if (!this.url) {}

  }

}
