import { inject } from "@angular/core"
import { AuthService } from "../authservice/auth.service"
import { Router } from "express"

export const authGuardFn=()=>{
    const authService=inject(AuthService)
    const router=inject(Router)
    if(authService.estoyLogueado || localStorage.getItem('token')){
    localStorage.setItem('token','1234567890')
    return true;
    }else{
    router.navigateByUrl('acessodenegado')
    return false;
    }
    
}