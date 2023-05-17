import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceTsService {

  courses: string[] = [];
  course: string = '';

  addCourse() {
    if ( this.course === '' ) {
      alert('Ingrese un nombre');
    } else {
      this.courses.push(this.course!);
    }
    this.course = '';
  }

}
