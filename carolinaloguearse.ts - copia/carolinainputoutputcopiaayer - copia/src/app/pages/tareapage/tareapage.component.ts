import { Component } from '@angular/core';
import { ListtareaComponent } from '../../components/listtarea/listtarea.component';
import { AddtareaComponent } from '../../componens/addtarea/addtarea.component';

@Component({
  selector: 'app-tareapage',
  standalone: true,
  imports: [ListtareaComponent],
  templateUrl: './tareapage.component.html',
  styleUrl: './tareapage.component.css'
})
export class TareapageComponent {
  
}
