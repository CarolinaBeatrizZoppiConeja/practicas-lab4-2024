import { Component, EventEmitter, inject, Inject, Output, output } from '@angular/core';
import { ListtareaComponent } from '../../components/listtarea/listtarea.component';
import { Tarea } from '../../pages/tareapage/tareainterface/tarea.interface';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EventType } from '@angular/router';
import { TareaService } from '../../db/tarea/service/tarea.service';

@Component({
  selector: 'app-addtarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './addtarea.component.html',
  styleUrl: './addtarea.component.css'
})
export class AddtareaComponent {
  @Output()
  emitirtarea:EventEmitter<Tarea>=new EventEmitter(); 
  

  fb=inject(FormBuilder)
  tareaservice=inject(TareaService)

  formulario=this.fb.nonNullable.group(
    {
      id:[0,[Validators.required]],
      tarea:['',[Validators.required,Validators.minLength(3)]]

     }
    )

  addTarea(){
  
  if(this.formulario.invalid) return;
  const tarea=this.formulario.getRawValue()
  this.tareaservice.postTareas(tarea)
  this.emitirtarea.emit(tarea);
}
addTareaDB(tarea:Tarea){
this.tareaservice.postTareas(tarea).subscribe({
next: (tarea:Tarea[])=>{
   alert('tarea guardada');
  },
  error: (e:Error)=>{
    alert(e.message);
  }
})

}
}