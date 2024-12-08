import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class GifsService
{
  constructor() { }

  private _tagsHistory : string[] = [];

  get tagsHistory(): string[]
  {
    return [...this._tagsHistory ];
  }

  public searchTags (tags: string) : void
  {
    if(tags.length === 0) return;
    console.log(this._tagsHistory );
    this.organizeHistory(tags);
  }


  private organizeHistory(tag : string) : void
  {
    tag=tag.toLowerCase();

    if(this._tagsHistory.includes(tag))
    {
      this._tagsHistory = this._tagsHistory.filter(
        (oldTag) => oldTag !== tag
      )
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this.tagsHistory.splice(0, 10)

  }

}
