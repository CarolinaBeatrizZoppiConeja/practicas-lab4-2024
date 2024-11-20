import { Component, Input } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
@Input()
   mensaje: string=''
  
}
