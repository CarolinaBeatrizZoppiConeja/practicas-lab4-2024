import { Component } from '@angular/core';
import { Tarea } from '../../pages/tareapage/tareainterface/tarea.interface';
import { AddtareaComponent } from "../../componens/addtarea/addtarea.component";
import { TareapageComponent } from '../../pages/tareapage/tareapage.component';

@Component({
  selector: 'app-listtarea',
  standalone: true,
  imports: [AddtareaComponent],
  templateUrl: './listtarea.component.html',
  styleUrl: './listtarea.component.css'
})
export class ListtareaComponent {
  ListaTareas: Tarea[]=[
    {id:1,nombre:'hacer el tp2020'},
    {nombre:'hacer el tp2021'},
    {id:3,nombre:'hacer el tp2022'},
    {nombre:'hacer el tp2024'}
  ]
  agregarLista(tarea:Tarea){
    this.ListaTareas.push(tarea)
  }
}
