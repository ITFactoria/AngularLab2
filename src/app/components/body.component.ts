import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  //styleUrls: ['./app.component.css']
})
export class BodyComponent {

  mostrar : boolean = false;
  frase: any = {
    mensaje: "Puede llorar mijito",
    autor : "Chikitina"

  }

  familiares : string[] = ["Mario", "Trinis", "Pacho", "Gordo"];

}
