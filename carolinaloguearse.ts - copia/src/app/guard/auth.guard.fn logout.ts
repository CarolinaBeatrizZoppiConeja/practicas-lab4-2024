import { inject } from "@angular/core"
import { Router } from "express"

export const authGuardFnlogout=()=>{
    const router=inject(Router)
    if( localStorage.getItem('token')){
    return true;
    }else{
    router.navigateByUrl('home')
    return false;
    }
    
}