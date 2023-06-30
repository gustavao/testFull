import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
 selector: 'app-add-notes',
 templateUrl: './add-notes.component.html',
 styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent {

 public options = new FormGroup({
   calificacion: new FormControl('',Validators.required),
   status: new FormControl('',Validators.required)
 });


 constructor() {}

}