import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tracks } from './tracks';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  _url;

  constructor(private http:HttpClient) { }

  searchMusic(val:String){
    this._url ="http://ws.audioscrobbler.com/2.0/?method=track.search&track="+val+"&api_key=edbd92a39081b4311c86a99c1e3d2761&format=json"
    return this.http.get(this._url);
  }

  addToWishlist(value):any{
    return this.http.post("http://localhost:8070/api/v1/track",value).subscribe();
  }
  getWishlist(value):any{
    return this.http.get("http://localhost:8070/api/v1/track",value).subscribe();
  }
 

  searchWishlist(){
    this._url="http://localhost:8080/api/v1/musics"
    return this.http.get<Tracks[]>(this._url);
  }

   updateComment(id,val){
  this._url="http://localhost:8080/api/v1/music/"+id;
   return this.http.put(this._url,
    {
      "trackComment": val
    });
  }

  deleteTrack(id){
    this._url="http://localhost:8082/api/v1/music/"+id;
     return this.http.delete(this._url);
    }

}