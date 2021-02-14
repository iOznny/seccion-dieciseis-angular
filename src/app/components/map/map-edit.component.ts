import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-map-edit',
  templateUrl: './map-edit.component.html',
  styleUrls: ['./map-edit.component.css']
})

export class MapEditComponent implements OnInit {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<MapEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder) {
    console.log(data);

    this.form = fb.group({
      'title': data.title,
      'desc': data.desc
    });
  }

  ngOnInit(): void {
  }

  // Guardamos las ediciones del marcador.
  saveChanges() {
    this.dialogRef.close(this.form.value);
  }

  // Cierra el modal del Dialog.
  onNoClick(): void {
    this.dialogRef.close();
  }

}
