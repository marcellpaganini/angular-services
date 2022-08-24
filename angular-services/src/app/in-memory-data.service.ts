import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { COURSES } from './Data/mock-courses';
import { STUDENTS } from './Data/mock-students';
import { Course } from './Models/course';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    let courses = COURSES;
    let students = STUDENTS;
    
    return {courses, students};
  }
}
