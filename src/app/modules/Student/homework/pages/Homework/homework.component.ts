import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  title = 'Tareas';

  listOfData = [
    {
      key: '1',
      title: 'Ejercio de Principios de Diseño',
      course: 'Patrones de diseño',
      date: '23 de setiembre del 2019',
      time: '13:00 hrs'
    },
    {
      key: '2',
      title: 'Ejercio de Principios de Diseño',
      course: 'Patrones de diseño',
      date: '23 de setiembre del 2019',
      time: '13:00 hrs'
    },
  ];



  constructor() {
  }

  ngOnInit() {
  }


}
