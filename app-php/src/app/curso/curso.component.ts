import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //Construtor
  constructor(private curso_servico:CursoService) { }

  //Vetor
  vetor!:Curso[];

  //Objeto da classe Curso
  curso = new Curso();

  //Inicializador
  ngOnInit(): void {
    //Ao iniciar o sistema devera listar os cursos
    this.selecao();
  }


  //Cadastro
  cadastro():void{
    this.curso_servico.cadastrarCurso(this.curso).subscribe(
      (res:Curso[]) => {
        
        //Adicionando dados ao vetor
        this.vetor = res;

        //Limpar os atributos
        this.curso.nomeCurso = '';
        this.curso.valorCurso = 0;

        //Atualizar a listagem
        this.selecao();
      }
    )
  }

  //Seleção
  selecao(){
    this.curso_servico.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )    
  }

  //Alterar
  alterar():void{
    alert('Alterar');
  }

  //Remover
  remover(){
    this.curso_servico.removerCurso(this.curso).subscribe(
      (res:Curso[]) => {
        this.vetor = res;

        this.curso.nomeCurso = "";
        this.curso.valorCurso = 0;
      }
    )
  }
}
