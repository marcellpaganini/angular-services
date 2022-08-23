import { Component, OnInit } from '@angular/core';
import { Student } from '../Models/student';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.schoolService.getStudents().subscribe(students => this.students = students);
  }
}
