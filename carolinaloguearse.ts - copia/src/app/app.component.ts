import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepagesComponent } from "./home/homepages/homepages.component";
import { AdministradorComponent } from "./admin/administrador/administrador.component";
import { AccesodenegadoComponent } from "./negado/accesodenegado/accesodenegado.component";
import { NavbarComponent } from "./nav/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carolinaloguearse.ts';
}
