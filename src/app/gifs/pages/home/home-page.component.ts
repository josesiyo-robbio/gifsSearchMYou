import { Component } from '@angular/core';
import {GifsService} from '../../services/gifs.service';
import {Gif} from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent
{

  constructor(private _gifsService : GifsService) {}

  get gifs (): Gif[]
  {
    return this._gifsService.gifsList;
  }

}
