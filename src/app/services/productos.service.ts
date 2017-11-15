import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable()
export class ProductosService {
  productos:any[]=[];
  cargando:boolean = true;
  constructor( private http:Http) { 
    this.cargarProductos();
  }

  public cargarProductos(){
    this.http.get("https://paginaweb-549ff.firebaseio.com/productos_idx.json").subscribe(res => {
      console.log(res.json());
      this.cargando=false;
    })
  }
}
