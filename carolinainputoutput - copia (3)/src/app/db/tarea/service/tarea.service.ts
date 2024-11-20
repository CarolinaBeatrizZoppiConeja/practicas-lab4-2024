import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../../../pages/tareapage/tareainterface/tarea.interface';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
http2=inject(HttpClient)
urlBase=environment.urlBase

  constructor(private http:HttpClient ) {}
    getTareas():Observable<Tarea[]>{
      return this.http.get<Tarea[]>(this.urlBase);
  }
  getTareaById(id:string):Observable<Tarea>{
    return this.http.get<Tarea>('${this.urlBase}/${id}');
  }
  postTareas(tarea:Tarea):Observable<Tarea>{
    return this.http.post<Tarea>('${this.urlBase}',tarea)
}

putTareas(tarea:Tarea,id:string | null ):Observable<Tarea>{
  return this.http2.put<Tarea>('${this.urlBase}/{id}',tarea);
}
  deleteTareaById(id:string):Observable<void>{
    return this.http2.delete<void>('${this.urlBase}/${id}'); 
  }
  
}
