import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http' ;
import { Persona } from './app.persona';
import { tap, catchError, filter} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};
const urlPersons = "http://localhost:8080/people";
const urlAnioMatricula = "http://localhost:8080/personas/anio-matriculacion";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  obtenLista() {
    throw new Error("Method not implemented.");
  }

  constructor(
    private http:HttpClient
  ) { }

  getAll(): Observable<Persona[]> {
    /*var arrPersonas : Persona[] = [
      {
        firstName : 'first name dummy 1',
        lastName : 'last name dummy 1'
      },
      {
        firstName : 'first name dummy 2',
        lastName : 'last name dummy 2'
      }
    ]
    var obs = new Observable<Persona[]>(observer => {
      setTimeout(() => {
        observer.next(arrPersonas);
      },1000);
    });*/

     var observHttp : Observable<any> = this.http.get<Persona[]>(urlPersons);
    return observHttp;
    /*return this.http.get<Persona[]>(urlPersons).pipe(
      filter(embededd => embededd.persons),
      catchError(this.handleError<[]>('getAll'))
    );*/
  }

  getPerson(id:Number): Observable<Persona> {
    const url = `${urlPersons}/${id}`;
    return this.http.get<Persona>(url);
  }

  addPersona(persona : Persona): Observable<Persona> {
    return this.http.post<Persona>(urlPersons, persona, httpOptions);
  }

  borrarPersona(id : Number) : Observable<Persona>{
    const url = `${urlPersons}/${id}`;
    return this.http.delete<Persona>(url,httpOptions);
  }

  public obtenerAnioMatricula(matricula : string) : Observable<string>{
    var params = new HttpParams()
      .set('matricula',matricula);
    var headers = new HttpHeaders()
      .set('Content-type','text/plain')
      .set('Accept','text/plain');
    return this.http.get<string>(urlAnioMatricula,{headers,params,responseType: 'text' as 'json'});
  }

  private handleError<T>(operacion: string, result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T); 
    }
  }



}
