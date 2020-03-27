import { Component, OnInit, Output, EventEmitter, Type } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Reporte } from '../reporte'


@Component({
  selector: 'app-reportar',
  templateUrl: './reportar.component.html',
  styleUrls: ['./reportar.component.css']
})
export class ReportarComponent implements OnInit {

  @Output() actualizar = new EventEmitter<string>();

  formulario;

  reporte;

  mensaje = null;

  constructor(private httpClientService: HttpClientService, private fb: FormBuilder) {
    this.reporte = new Reporte();

  }

  ngOnInit() {
    this.formulario = this.fb.group({
      documento: [null, Validators.required],
      nombres: [null, Validators.required],
      fechaInicio: [null, Validators.required],
      fechaFin: [null, Validators.required],
      horaInicio: [null, Validators.required],
      horaFin: [null, Validators.required],
      horaInicioExtra: [null, Validators.required],
      horaFinExtra: [null, Validators.required],
      motivoExtra: [null, Validators.required],
    });
  }

  enviarReporte() {

    if (this.formulario.valid) {
      this.httpClientService.insertarReporte(this.reporte, data => {
        console.log(data)
        this.actualizar.emit(null);
        this.reporte = new Reporte();

        this.mensaje = "Reporte ingresado con exito!";

      })
    } else {
      this.mensaje = "Error: Por favor valide el formulario";

    }


  }


}
