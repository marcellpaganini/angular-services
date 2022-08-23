import { Component, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { SchoolService } from '../school.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = []; 

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.schoolService.getCourses().subscribe(courses => this.courses = courses);
  }
}
