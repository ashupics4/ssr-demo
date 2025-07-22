

import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {Lesson} from "../model/lesson";
import {map} from 'rxjs/operators';



@Injectable()
export class CoursesService {

    static readonly API_URL = 'https://angular-universal-course-94047.firebaseio.com';

    public headers = new HttpHeaders({
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      });

    constructor(private http: HttpClient) {

    }

    findCourseById(courseId: string): Observable<Course> {
        return this.http.get<Course>(`${CoursesService.API_URL}/courses/${courseId}.json`);
    }

    findAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>('http://localhost:9000/api/courses', {headers: this.headers});
    }

    findAllCourseLessons(courseId:string): Observable<Lesson[]> {
        return this.http.get<Lesson[]>(`${CoursesService.API_URL}/lessons/${courseId}.json`);
    }
}
