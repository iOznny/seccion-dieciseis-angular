import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { MapComponent } from './components/map/map.component';
import { MapEditComponent } from './components/map/map-edit.component';

import { AgmCoreModule } from '@agm/core';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [
    MapEditComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    MapEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14' //AIzaSyANTfRiaTlLvrXVIQu9dn7mfOfINQm32TE
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
