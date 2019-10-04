import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-left-student',
  templateUrl: './menu-left-student.component.html',
  styleUrls: ['./menu-left-student.component.scss']
})
export class MenuLeftStudentComponent implements OnInit {

  @Input() isCollapsed: boolean = false

  menus = [
    {
      title: 'Tareas',
      key: 'Tareas',
      url: '/student/homework',
      icon: 'calculator',
    },
    {
      title: 'Historial de Tareas',
      key: 'History',
      url: '/student/history-homework',
      icon: 'file-text',
    },
    {
      title: 'Cursos',
      key: 'Courses',
      url: '/student/courses',
      icon: 'read',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
