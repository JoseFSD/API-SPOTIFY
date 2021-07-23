import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService) { 
    this.loading = false;
  }
  
  ngOnInit(): void {
  }
  
  buscar(termino: string): void {
    this.loading = true;
    this.spotify.getArtistas( termino === '' ? ' ' : termino )
    .subscribe( (data: any) => {
        this.artistas = data;
        this.loading = false;
      });
  }

}
