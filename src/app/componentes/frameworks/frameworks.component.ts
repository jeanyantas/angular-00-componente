import { Component } from '@angular/core';
import { AppServiceTsService } from 'src/app/services/app.service.ts.service';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html'
})
export class FrameworksComponent {

  // Se inyecta el servicio en el constructor del componente para poder acceder a él
  constructor( public service: AppServiceTsService ) { }

  get courses(): string[] {
    return this.service.courses;
  }

  onNewCourse() {
    this.service.addCourse();
  }

}
