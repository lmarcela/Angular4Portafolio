import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformationService {

  info: any = {};
  cargada : boolean = false;
  cargadaSobreNosotros : boolean = false;
  equipo: any[]=[];

  constructor( public http:Http ) { 
    this.cargaInfo();
    this.cargaSobreNosotros();
  }

  public cargaInfo(){
    this.http.get("assets/data/info.pagina.json").subscribe( data =>{
      //console.log(data.json());
      this.cargada = true;
      this.info = data.json();
    })
  }
  public cargaSobreNosotros(){
    this.http.get("https://paginaweb-549ff.firebaseio.com/equipo.json").subscribe( data =>{
      console.log(data.json());
      this.cargadaSobreNosotros = true;
      this.equipo = data.json();
    })
  }

}
