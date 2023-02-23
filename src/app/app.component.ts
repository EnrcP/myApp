import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'myApp';

  cambiaRotta(url:string){
    this.router.navigateByUrl(url);
  }

  constructor(private router : Router){}

}
