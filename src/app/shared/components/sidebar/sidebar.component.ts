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
  //CLASS PROPERTIES (NA)



  //CONSTRUCTOR
  constructor(private _gifsService: GifsService) {}



  //GETTERS & SETTERS (NA)



  //METHODS
  public tags() : string[]
  {
    return this._gifsService.tagsHistory
  }




  public searchTag(tag : string ): void
  {
    const newTag : string = tag;
    this._gifsService.searchTags(newTag);
  }



  //LIFECYCLE HOOKS (NA)

}
