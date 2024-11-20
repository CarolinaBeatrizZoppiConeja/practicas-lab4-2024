import { Component, inject, OnInit } from '@angular/core';
import { Tarea } from '../../pages/tareapage/tareainterface/tarea.interface';
import { AddtareaComponent } from "../../componens/addtarea/addtarea.component";
import { TareapageComponent } from '../../pages/tareapage/tareapage.component';
import { TareaService } from '../../db/tarea/service/tarea.service';
import { UpdatetareaComponent } from "../updatetarea/updatetarea.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listtarea',
  standalone: true,
  imports: [AddtareaComponent, RouterModule],
  templateUrl: './listtarea.component.html',
  styleUrl: './listtarea.component.css'
})
export class ListtareaComponent  implements OnInit{
  ngOnInit(): void {
    this.listarTareas();
  }
  ListaTareas: Tarea[]=[//[]
    {id:1,tarea:'hacer el tp2020'},
    {tarea:'hacer el tp2021'},
    {id:3,tarea:'hacer el tp2022'},
    {tarea:'hacer el tp2024'}
  ];
 
  agregarLista(tarea:Tarea){
    this.ListaTareas.push(tarea)}

    tareaService=inject(TareaService)

recibirTareaHijo(tarea:any){
  this.ListaTareas.push({...tarea});
  alert('cargando tarea')
}
listarTareas(){
  this.tareaService.getTareas().subscribe({
    next:(tarea:Tarea[])=>{
      this.ListaTareas=tarea
    },
    error:(e:Error)=>{
      alert('e.menssage');
    }
 } )
}
delete(id:string){
  this.tareaService.deleteTareaById(id).subscribe(
    {
    next:()=>{
      alert('actualizado')
    },
    error:(e.Error) =>{
      alert('eliminar')
    }
}
)
}

}