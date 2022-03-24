import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  //URL
  url = "http://localhost/api/php/";

  //Vetor
  vetor: Curso[] = [];

  constructor(private http:HttpClient) { }

  //Obter todos os cursos
  obterCursos(): Observable<Curso[]>{
    return this.http.get(this.url+"listar").pipe(
      map((res) => {
        this.vetor = res['cursos'];
        return this.vetor;
      })
    );
  }

  //Cadastrar curso
  cadastrarCurso(c:Curso): Observable<Curso[]>{
    return this.http.post(this.url+'cadastrar', {cursos:c})
    .pipe(map((res) => {
      this.vetor.push(res['cursos']);
      return this.vetor;
    }))
  }

  //Remover curso
  removerCurso(c:Curso):Observable<Curso[]>{

    const param = new HttpParams().set("idCurso", c.idCurso?.toString());

    return this.http.delete(this.url+'excluir', {params:param})
    .pipe(map((res) => {

      const filtro = this.vetor.filter((curso) => {
        return +curso['idCurso'] !== +c.idCurso;
      });

      return this.vetor = filtro;

    }))
  }
}
