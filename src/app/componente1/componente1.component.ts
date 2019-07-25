import {Component, OnInit} from '@angular/core';
import {GeneradorService} from '../service/generador.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component implements OnInit {
  private mensajeAleatorio: string;
  private isDisplay: boolean;
  private isDisplayButton1: boolean;
  private textoboton2: string;
  private textoboton3: string;

  constructor(private generadorService: GeneradorService) {
    this.isDisplay = true;
    this.isDisplayButton1 = true;
    this.textoboton2 = 'Ocultar Mensaje';
    this.textoboton3 = 'Ocultar boton generador';
  }

  ngOnInit() {
    this.getWordGenerated();
    this.isDisplay = true;
    this.textoboton2 = 'Ocultar Mensaje';
  }

  private getWordGenerated() {
    return this.generadorService.getJSON().subscribe(data => {
      this.mensajeAleatorio = data.quote;
      return data;
    });
  }

  private setDisplayMesage() {
    if (!this.isDisplay) {
      this.textoboton2 = 'Ocultar mensaje';
    } else {
      this.textoboton2 = 'Mostrar mensaje';
    }
    return this.isDisplay = !this.isDisplay;
  }

  private displayButton1() {
    if (!this.isDisplayButton1) {
      this.textoboton3 = 'Ocultar boton generador';
    } else {
      this.textoboton3 = 'Mostrar boton generador';
    }
    return this.isDisplayButton1 = !this.isDisplayButton1;
  }
}
