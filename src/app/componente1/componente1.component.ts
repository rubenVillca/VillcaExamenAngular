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
  private textoboton2: string;

  constructor(private generadorService: GeneradorService) {
    this.isDisplay = true;
    this.textoboton2 = 'Ocultar';
  }

  ngOnInit() {
    this.getWordGenerated();
    this.isDisplay = true;
    this.textoboton2 = 'Ocultar';
  }

  private getWordGenerated() {
    return this.generadorService.getJSON().subscribe(data => {
      this.mensajeAleatorio = data.quote;
      return data;
    });
  }

  private setDisplayMesage() {
    if (!this.isDisplay) {
      this.textoboton2 = 'Ocultar';
    } else {
      this.textoboton2 = 'Mostrar';
    }
    return this.isDisplay = !this.isDisplay;
  }
}
