import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-iniziale',
  templateUrl: './pagina-iniziale.component.html',
  styleUrls: ['./pagina-iniziale.component.scss']
})
export class PaginaInizialeComponent {

  data= new Date();
  message: string = "Benvenuto nella pagina home dell'App";

  constructor() {}

}
