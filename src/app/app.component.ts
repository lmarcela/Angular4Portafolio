import { Component } from '@angular/core';
import { InformationService } from "./services/information.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor ( public _is: InformationService ){

  }
}
