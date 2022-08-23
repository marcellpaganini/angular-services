import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from './Models/student';
import { STUDENTS } from './Data/mock-students';
import { Course } from './Models/course';
import { COURSES } from './Data/mock-courses';

@Injectable({
  providedIn: 'root'
})

export class SchoolService {

  constructor() { }

  getStudents(): Observable<Student[]> {
    const students = of(STUDENTS);
    return students;
  }

  getCourses(): Observable<Course[]> {
    const courses = of(COURSES);
    return courses;
  }
}
