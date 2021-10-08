import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';



export interface PeriodicElement {
  matricula: number;
  nome_completo: string;
  data_nascimento: string;
  area_atuacao: string;
  funcao: string;
  gestor: string;
  salario: number;
  genero: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {matricula: 2011360, nome_completo: 'Maiara Santos', data_nascimento: '1996-04-23', area_atuacao: 'Funilaria', funcao:'Auxiliar Funileiro N2', gestor:'Jose Pimenta', salario: 1279.58, genero: 7},
  {matricula: 1602310, nome_completo: 'Jose Pimenta', data_nascimento: '1990-09-30', area_atuacao: 'Funilaria', funcao:'Funileiro N1', gestor:'Ester Benedita Drumond', salario: 3979.58, genero: 5},
];

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.sass']
})

export class ListEmployeesComponent implements OnInit
{
  constructor(private title:Title) { }


  ngOnInit(): void {
    this.title.setTitle('Lista de Funcionários - Acelera Gestão Automotiva')
  }
  displayedColumns: string[] = ['matricula', 'nome_completo', 'data_nascimento','area_atuacao','funcao','gestor', 'salario', 'genero'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  
  rabodegalo(){
    let pegaObj;
    this.clickedRows.forEach(element => {
      pegaObj = element.matricula
    });
    console.log(pegaObj)

  }
  
}




