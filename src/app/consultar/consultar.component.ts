import { Component, OnInit, Type } from '@angular/core';
import { HttpClientService } from '../http-client.service'

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  reportes = [];
  mostrarReportar = false;
  textoBoton = "Insertar Nuevo Reporte"

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.obtenerReportes();
  }

  obtenerReportes() {
    this.httpClientService.consultarReportes(data => {
      this.reportes = data;
    })
  }

  toggleMostrarReportar() {
    (this.mostrarReportar) ? this.mostrarReportar = false : this.mostrarReportar = true;
    (this.textoBoton == "Insertar Nuevo Reporte") ? this.textoBoton = "Cerrar Ventana" : this.textoBoton = "Insertar Nuevo Reporte";

  }
  

}
