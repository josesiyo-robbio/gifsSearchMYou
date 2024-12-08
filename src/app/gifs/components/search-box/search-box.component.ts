import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,

  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})



export class SearchBoxComponent
{
  constructor(private gifsService: GifsService)
  {

  }

  @ViewChild('searchInput')
  tagInput!: ElementRef<HTMLInputElement>


  searchTag()
  {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTags(newTag);

    this.tagInput.nativeElement.value = '';



  }
}
