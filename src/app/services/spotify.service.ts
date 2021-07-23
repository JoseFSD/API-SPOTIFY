import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// el map se encarga de filtrar lo que recibo de la petición http
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'BQCnnJmbyNPlC4j3qh411VmBMT6qf8ernbd3gxJQWkP6itDIUd2YXi0ag2an3usKwMVcZ_hDdnRg_TPd4g0';
  pais: string = 'ES';
  
  constructor(private http: HttpClient) { }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({ 
      'Authorization': `Bearer ${this.token}`
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {    
    return this.getQuery('browse/new-releases?limit=20')
            .pipe( map((data: any) => data.albums.items ));
  }
  
  getArtistas( termino: string ) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
            .pipe( map((data: any) => data.artists.items ));
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${id}/top-tracks?country=${this.pais}`)
            .pipe( map((data: any) => data.tracks ));
  }
}
