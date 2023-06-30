import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddAlumnComponent } from '../../components/add-alumn/add-alumn.component';
import { AddNotesComponent } from '../../components/add-notes/add-notes.component';
import { SchoolService } from 'src/app/services/school.service';

export interface School {
  nombre: string;
  id: number;
  edad: number;
  status: string;
  calificaciones: number;
  statusCal: string;
  action: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  displayedColumns: string[] = ['id', 'nombre', 'edad', 'status', 'calificaciones', 'statusCal', 'action'];
  dataSource: School[] = [];

  constructor(public dialog: MatDialog, private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.init()
  }


  init(): void {
    this.schoolService.getAllInfo()
      .subscribe(res => {
        console.log("all data", res)
        this.dataSource = res;
      }
      );
  }

  agregaAlumno() {
    const dialogRef = this.dialog.open(AddAlumnComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      if (result) {
        this.schoolService.addAlumn(result).subscribe(res => {
          console.log("respuesta de insert", res);
          this.init();
        })
      }
    });
  }

  agregaCalificacion(id: any) {
    console.log("click en", id);
    const dialogRef = this.dialog.open(AddNotesComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      if (result) {
        this.schoolService.addNote({ ...result, ...{ idEstudiante: id } }).subscribe(res => {
          console.log("respuesta de insert", res);
          this.init();
        })
      }

    });
  }

}