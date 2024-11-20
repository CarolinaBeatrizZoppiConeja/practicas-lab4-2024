import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  mensajepadre:string='';
  escribirmensaje(event:any){
    this.mensajepadre=event.target.value
  }
}
