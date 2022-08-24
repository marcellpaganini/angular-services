import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from './Models/student';
import { STUDENTS } from './Data/mock-students';
import { Course } from './Models/course';
import { COURSES } from './Data/mock-courses';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SchoolService {
  private studentsUrl = 'api/students';
  private coursesUrl = 'api/courses';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl)
    .pipe(
      catchError(this.handleError<Student[]>('getStudents', []))
    );
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl)
    .pipe(
      catchError(this.handleError<Course[]>('getCourses', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
