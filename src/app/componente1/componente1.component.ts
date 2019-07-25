import {Component, OnInit} from '@angular/core';
import {GeneradorService} from '../service/generador.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component implements OnInit {
  private mensajeAleatorio: string;

  constructor(private generadorService: GeneradorService) {
  }

  ngOnInit() {
    this.getWordGenerated();
  }

  private getWordGenerated() {
    return this.generadorService.getJSON().subscribe(data => {
      this.mensajeAleatorio = data.quote;
      return data;
    });
  }
}
