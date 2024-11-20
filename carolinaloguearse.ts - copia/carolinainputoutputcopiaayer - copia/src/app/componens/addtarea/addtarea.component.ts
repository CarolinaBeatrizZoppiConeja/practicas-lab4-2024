import { Component, EventEmitter, Output, output } from '@angular/core';
import { ListtareaComponent } from '../../components/listtarea/listtarea.component';
import { Tarea } from '../../pages/tareapage/tareainterface/tarea.interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-addtarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtarea.component.html',
  styleUrl: './addtarea.component.css'
})
export class AddtareaComponent {
  @Output()
  emitirtarea:EventEmitter<Tarea>=new EventEmitter();
  tarea:Tarea={
    id:0,
    nombre:''
  }

  //fb=inject(FormBuilder)

  //formulario=this.fb.nonNullable.group({ })
  addTarea(){
    this.emitirtarea.emit({...this.tarea});
    
  }
}
