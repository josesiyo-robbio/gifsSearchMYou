import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Gif, SearchResponse} from '../interfaces/gifs.interfaces';



@Injectable({
  providedIn: 'root'
})
export class GifsService
{
  //CLASS PROPERTIES
  private _tagsHistory    : string[]  = [];
  private apiKey          : string    = environment.apiGifsKeys;
  private apiServiceUrl   : string    = environment.apiUrlGifs;
  public  gifsList        : Gif[]     = [];



  //CONSTRUCTOR
  constructor(private http: HttpClient)
  {
    this.loadLocal();
  }




  //GETTERS & SETTERS
  get tagsHistory(): string[]
  {
    return [...this._tagsHistory ];
  }



  //METHODS
  public searchTags (tags: string) : void
  {
    if(tags.length === 0) return;

    this.organizeHistory(tags);

    const params : HttpParams = new HttpParams().set('api_key', this.apiKey)
      .set('limit','10')
      .set('q',tags);

    this.http.get<SearchResponse>(`${this.apiServiceUrl}/search`,{params}).subscribe(response => {
      this.gifsList= response.data;
    });
  }


  private organizeHistory(tag : string) : void
  {
    tag=tag.toLowerCase();

    if(this._tagsHistory.includes(tag))
    {
      this._tagsHistory = this._tagsHistory.filter((oldTag) : boolean => oldTag !== tag )
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
    this.saveLocal();
  }


  private saveLocal() : void
  {
    localStorage.setItem('gifs', JSON.stringify(this._tagsHistory));
  }


  private loadLocal() : void
  {
    if(!localStorage.getItem('gifs'))
    {
      return;
    }
    this._tagsHistory  = JSON.parse(<string>localStorage.getItem('gifs'));

    if(this._tagsHistory.length === 0) return;
    this.searchTags(this._tagsHistory[0]);
  }



  //LIFECYCLE HOOKS (NA)

}
