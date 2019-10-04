import {Component, OnInit} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd';
import {ModalHomeworkComponent} from '../../components/Modal/modal-homework.component';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  title = 'Tareas';
  cicle = 'Semestre 2019-II'

  varTable = {
    title: [
      'N°',
      'Título',
      'Curso',
      'Fecha (Límite)',
      'Tiempo (Límite)',
      'Acciones'
    ],
    content: [
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
      {
        key: '3',
        title: 'Ejercio de Principios de Diseño',
        course: 'Patrones de diseño',
        date: '23 de setiembre del 2019',
        time: '13:00 hrs'
      },
      {
        key: '4',
        title: 'Ejercio de Principios de Diseño',
        course: 'Patrones de diseño',
        date: '23 de setiembre del 2019',
        time: '13:00 hrs'
      },
      {
        key: '5',
        title: 'Ejercio de Principios de Diseño',
        course: 'Patrones de diseño',
        date: '23 de setiembre del 2019',
        time: '13:00 hrs'
      },
      {
        key: '6',
        title: 'Ejercio de Principios de Diseño',
        course: 'Patrones de diseño',
        date: '23 de setiembre del 2019',
        time: '13:00 hrs'
      },
      {
        key: '7',
        title: 'Ejercio de Principios de Diseño',
        course: 'Patrones de diseño',
        date: '23 de setiembre del 2019',
        time: '13:00 hrs'
      },
      {
        key: '8',
        title: 'Ejercio de Principios de Diseño',
        course: 'Patrones de diseño',
        date: '23 de setiembre del 2019',
        time: '13:00 hrs'
      },
      {
        key: '9',
        title: 'Ejercio de Principios de Diseño',
        course: 'Patrones de diseño',
        date: '23 de setiembre del 2019',
        time: '13:00 hrs'
      },
      {
        key: '10',
        title: 'Ejercio de Principios de Diseño',
        course: 'Patrones de diseño',
        date: '23 de setiembre del 2019',
        time: '13:00 hrs'
      },
      {
        key: '11',
        title: 'Ejercio de Principios de Diseño',
        course: 'Patrones de diseño',
        date: '23 de setiembre del 2019',
        time: '13:00 hrs'
      },
      {
        key: '12',
        title: 'Ejercio de Principios de Diseño',
        course: 'Patrones de diseño',
        date: '23 de setiembre del 2019',
        time: '13:00 hrs'
      },
      {
        key: '13',
        title: 'Ejercio de Principios de Diseño',
        course: 'Patrones de diseño',
        date: '23 de setiembre del 2019',
        time: '13:00 hrs'
      },
    ]
  };

  constructor(private modalService: NzModalService) {
  }

  ngOnInit() {
  }


  showModal(title:string) {
    this.modalService.create({
      nzTitle: title,
      nzContent: ModalHomeworkComponent,
      nzWidth: '800'
    });
  }
}
