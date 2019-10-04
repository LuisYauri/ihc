import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  isCollapsed = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/'])
  }
}
