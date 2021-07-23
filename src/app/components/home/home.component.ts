import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading = true;
  error = false;
  mensajeError = '';

  constructor(private spotify: SpotifyService) {
    
    this.spotify.getNewReleases()
      .subscribe( (data: any) => {
  
        this.loading = false;
        this.nuevasCanciones = data;
  
      }, ( errService: any ) => {
  
        this.loading = false;
        this.error = true;
        this.mensajeError = errService.error.error.message;
        
      });
  }

  ngOnInit(): void {
  }

}
