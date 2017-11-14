import { Component} from '@angular/core';
import { InformationService } from "../../services/information.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  constructor ( public _is: InformationService ){
    
  }
}
