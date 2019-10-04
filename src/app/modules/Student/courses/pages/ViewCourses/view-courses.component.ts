import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent implements OnInit {
  title = 'Patrones de Diseño';
  cicle = 'Semestre 2019-II'

  semana1 = [
    { 
      'img': 'https://image.flaticon.com/icons/svg/136/136522.svg',
      'text': 'La tarea consiste en realizar la misma actividad.'
    },
    { 
      'img': '',
      'text': 'Accedo a datos con JDBC, JSP.'
    }
  ];

  semana2 = [
    'Principios de Diseño de Software Archivo.',
    'Diseño con JSP y Servlet.'
  ];


  constructor() { }

  ngOnInit() {
  	
  }
}
