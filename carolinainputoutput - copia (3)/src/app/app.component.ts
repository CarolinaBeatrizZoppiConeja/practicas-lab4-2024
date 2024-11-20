import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareapageComponent } from './pages/tareapage/tareapage.component';
import { AddtareaComponent } from "./componens/addtarea/addtarea.component";
import { ListtareaComponent } from "./components/listtarea/listtarea.component";
import { PadreComponent } from './input/padre/padre.component';
import { FormsModule } from '@angular/forms';
import { ComponentsComponent } from "./components/components.component";
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HijoComponent } from './input/hijo/hijo.component';
import { InicioPageComponent } from "./page/tareapage/inicio-page/inicio-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PadreComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carolinainputoutput';

}
