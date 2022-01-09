import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  txt_casella:string="Testo modificato"

  onInputUpdate(e:Event){
    this.txt_casella=(<HTMLInputElement>e.target).value 
  }
}

