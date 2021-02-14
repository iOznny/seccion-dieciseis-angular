import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/classes/marker.class';

import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { MapEditComponent } from './map-edit.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  public markers: Marker[] = [];
  public lat = 19.4978;
  public lng = -99.1269;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { 
    // Recuperamos los markers del storage.
    if(localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit(): void {
  }

  // Agregamos nuevo marker al array de los marcadores.
  addMarker(event) {
    const coords: { lat: number, lng: number } = event.coords;
    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);
    this.saveStorage();

    // Simple message with an action.
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 1200 });
  }

  // Editar marcador.
  editMarker(marker: Marker) {
    const dialogRef = this.dialog.open(MapEditComponent, {
      width: '250px',
      data: { title: marker.title, desc: marker.desc }
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed');
      
      if ( !result ) {
        return;
      }

      marker.title = result.title;
      marker.desc = marker.desc;
      this.saveStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 1200 });
    });
  }

  // Guardamos los markers en el storage.
  saveStorage() {
    localStorage.setItem('markers', JSON.stringify(this.markers) );
  }

  // Borramos el marker.
  deleteMarker(i: number) {
    this.markers.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar', { duration: 1200 });
  }

}
