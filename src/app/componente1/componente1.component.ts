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
  private isDisplayImagen: boolean;
  private isDisplayPlantilla: boolean;
  private textoboton2: string;
  private textoboton3: string;
  private textoboton4: string;
  private textoboton5: string;
  private isDisplayEasterEggs: boolean;

  constructor(private generadorService: GeneradorService) {
    this.isDisplay = true;
    this.isDisplayImagen = false;
    this.isDisplayButton1 = true;
    this.isDisplayPlantilla = true;
    this.isDisplayEasterEggs = false;
    this.textoboton2 = 'Ocultar Mensaje';
    this.textoboton3 = 'Ocultar boton generador';
    this.textoboton4 = 'Mostrar Imagen';
    this.textoboton5 = 'Ocultar Plantilla';
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
    this.isDisplay = !this.isDisplay;
    this.verifyEasterEggs();
    return this.isDisplay;
  }

  private displayButton1() {
    if (!this.isDisplayButton1) {
      this.textoboton3 = 'Ocultar boton generador';
    } else {
      this.textoboton3 = 'Mostrar boton generador';
    }
    this.isDisplayButton1 = !this.isDisplayButton1;
    this.verifyEasterEggs();
    return this.isDisplayButton1;
  }

  private displayImagen() {
    if (!this.isDisplayImagen) {
      this.textoboton4 = 'Ocultar Imagen';
    } else {
      this.textoboton4 = 'Mostrar Imagen';
    }
    this.isDisplayImagen = !this.isDisplayImagen;
    this.verifyEasterEggs();
    return this.isDisplayImagen;
  }

  private displayPlantilla() {
    if (!this.isDisplayPlantilla) {
      this.textoboton5 = 'Ocultar Plantilla';
    } else {
      this.textoboton5 = 'Mostrar Plantilla';
    }

    this.isDisplayPlantilla = !this.isDisplayPlantilla;
    this.verifyEasterEggs();
    return this.isDisplayPlantilla;
  }

  private verifyEasterEggs() {
    if (this.isDisplayImagen && this.isDisplay && this.isDisplayPlantilla && this.isDisplayButton1) {
      this.isDisplayEasterEggs = true;
    } else {
      this.isDisplayEasterEggs = false;
    }
  }
}
