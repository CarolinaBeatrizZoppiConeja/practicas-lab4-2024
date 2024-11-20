import { Component, inject, OnInit } from '@angular/core';
import { PgComponent } from './pg/pg.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TareaService } from '../../db/tarea/service/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatetarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './updatetarea.component.html',
  styleUrl: './updatetarea.component.css'
})
export class UpdatetareaComponent implements OnInit{ 
  ngOnInit(): void {
    //throw new Error('Error')
    this.activatedRoute.paramMap.subscribe({
      next:(param)=>{
       
        this.param.get('id');
        this.getTareaById(this.id)
      // alert(param.get('id'));
      },
      error:(e:Error)=>{
        alert(e.message);

      }
    
    })
    getTareaById(id:string | null){
    this.ts.getTareaById(id).subscribe({
      next:(tarea:Tarea)=>{
        this.fomulario.controls['id'].setValue(tarea.id)
        this.formulario.controls['tarea'].setValue(tarea.tarea)
      },
      error:(e.Error){
        alert(e.menssage)
      }
    })
  }
  id:string | null=null;

  fb=inject(FormBuilder)
  ts=inject(TareaService)
  activatedRoute=inject(ActivatedRoute)
  router=inject(Router)

  formulario=this.fb.nonNullable.group({

    id:['',[Validators.required]],
    tarea:['',[Validators.required]]
  })
  Update(){
    if (this.formulario.invalid) return;
    const tarea=this.formulario.getRawValue()
    //const t={
    //id:this.formulario.controls['id'].value
    this.ts.putTarea(tarea,this.id).subscribe({
      next:()=>{
        this.router.navigateByUrl('input')
        alert('actualizado')

      },
      error:()=>{
        alert('error...')
      }
    })
    }
  }
}
