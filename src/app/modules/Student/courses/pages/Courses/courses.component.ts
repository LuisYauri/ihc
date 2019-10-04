import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedValue = null;
  title = 'Cursos';
  cicle = 'Semestre 2019-II'

  constructor(private router: Router) { }

  ngOnInit() {

  }

  viewCourses(){
  	this.router.navigate(['/student/courses/view'])
  }

}
