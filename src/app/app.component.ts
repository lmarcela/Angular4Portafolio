import { Component } from '@angular/core';
import { InformationService } from "./services/information.service"
import { ProductosService } from "./services/productos.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor ( public _is: InformationService, public _ps: ProductosService ){

  }
}
