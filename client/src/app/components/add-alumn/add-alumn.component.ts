import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
 selector: 'app-add-alumn',
 templateUrl: './add-alumn.component.html',
 styleUrls: ['./add-alumn.component.scss']
})
export class AddAlumnComponent {

 public options = new FormGroup({
     nombre: new FormControl('',Validators.required),
     edad: new FormControl('',Validators.required),
     status: new FormControl('',Validators.required)
   });

 constructor() {}

}