import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
@Injectable()
export class ProductosService {
  productos:any[]=[];
  productosFiltrado:any[]=[];
  cargando:boolean = true;

  constructor( private http:Http) { 
    this.cargarProductos();
  }

  public buscarProducto(termino:string){
    //console.log("Buscando producto");
    //console.log(this.productos.length);

    if(this.productos.length===0){
      this.cargarProductos().then(()=>{
        //termino la carga
      this.filtrarProductos(termino);
      })
    }
    else{
      this.filtrarProductos(termino);
    }

    
  }

  private filtrarProductos(termino:string){
    this.productosFiltrado=[];
    termino.toLowerCase();
    this.productos.forEach(prod=>{
      if(prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0){
        this.productosFiltrado.push(prod);
        //console.log(prod);
      }
      //console.log(prod);
    })
  }
  public cargarProducto(cod:string){
    this.productos
    return this.http.get(`https://paginaweb-549ff.firebaseio.com/productos/${cod}.json`);
  }

  public cargarProductos(){
    let promesa=new Promise((resolve, reject)=>{

      this.http.get("https://paginaweb-549ff.firebaseio.com/productos_idx.json").subscribe(res => {
        //console.log(res.json());
        //setTimeout(()=>{
          this.cargando=false;
          this.productos=res.json();
          resolve();
        //},1500)
        
      })
    });
    return promesa;
  }
}
