import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Gif, SearchResponse} from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})



export class GifsService
{
  constructor(private http: HttpClient) { }

  private _tagsHistory : string[] = [];
  private apiKey : string = environment.apiGifsKeys;
  private apiServiceUrl : string = environment.apiUrlGifs;

  public gifsList : Gif[] = [];

  get tagsHistory(): string[]
  {
    return [...this._tagsHistory ];
  }

  public searchTags (tags: string) : void
  {
    if(tags.length === 0) return;
    console.log(this._tagsHistory );
    this.organizeHistory(tags);

    const params = new HttpParams().set('api_key', this.apiKey)
      .set('limit','10')
    .set('q',tags);

    this.http.get<SearchResponse>(`${this.apiServiceUrl}/search`,{params}).subscribe(response => {
      //console.log(response);
      this.gifsList= response.data;
      console.log(this.gifsList);
    });


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
