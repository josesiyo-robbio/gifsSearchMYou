import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent
{

  constructor(private _gifsService: GifsService) {}


  public tags() : string[]
  {
    return this._gifsService.tagsHistory
  }




    searchTag(tag : string )
  {
    const newTag = tag;
    this._gifsService.searchTags(newTag);




  }

}
