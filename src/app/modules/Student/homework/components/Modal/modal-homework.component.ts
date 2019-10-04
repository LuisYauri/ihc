import {Component, OnInit} from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';

@Component({
  selector: 'app-modal-homework',
  templateUrl: './modal-homework.component.html',
  styleUrls: ['./modal-homework.component.scss']
})
export class ModalHomeworkComponent implements OnInit {

  text = 'La tarea consiste en realizar la misma actividad que realiza la aplicacion de consola Ahora con JSP y Servlets. Se requiere los archivos fuente para poder ejecurarlos como prueba de su funcionamiento.';
  text_2 = 'Solo se puede subir archivos con un peso máximo de 50mb'
  text_video = 'Material de Ayuda'
  text_comment = 'Comentarios'
  varTable = {
    title: [
      'Estado de entrega',
      'Pendiente de entrega'
    ],
    content: [
      {
        key: '1',
        estado: 'Fecha de entrega',
        pendiente: '29 de Setiembre del 2019',
      },
      {
        key: '1',
        estado: 'Última modificación',
        pendiente: '29 de Setiembre del 2019',
      },
      {
        key: '1',
        estado: 'Archivo enviado',
        pendiente: 'Ejercicio JSP.rar',
      },
      {
        key: '1',
        estado: 'Tiempo restante',
        pendiente: '2 horas',
      },
    ]
  };

  flag = 0;

  constructor(private modal: NzModalRef) {
  }

  ngOnInit() {
  }

  destroyModal(): void {
    this.modal.destroy();
  }

  next() {
    this.flag = 1;
  }

  preview() {
    this.flag = 0;
  }

  send() {
    this.modal.destroy();
  }

  changeHelp() {
    this.flag = 2;
  }
}
