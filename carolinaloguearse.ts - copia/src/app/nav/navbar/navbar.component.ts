import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../authservice/auth.service';
import { Router } from 'express';
import { clear } from 'console';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class navbarComponent implements OnInit{
  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.textbutton='logout'
      this.auth.logIn()
      this.router.navigateByUrl('administrador')
    }
  }
  textbutton:string='login'
  auth=inject(AuthService)
  onLoinlogout(){
    if(this.textbutton==='login'){
      this.textbutton='logout'
      this.auth.logIn()
      this.router.navigateByUrl('administrador')
    }
    else{
      this.auth.logOut()
        this.textbutton='login'
        this.router.navigateByUrl('home')
        localStorage.clear()
      
    }
  }
  router=inject(Router)
}
