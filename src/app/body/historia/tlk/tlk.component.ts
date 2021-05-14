import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Historias } from 'src/app/database/infos/historias';

@Component({
  selector: 'app-tlk',
  templateUrl: './tlk.component.html',
  styleUrls: ['./tlk.component.css'],
  providers: [Historias]
})
export class TlkComponent implements OnInit {

  @HostListener('window:hashchange', ['$event.target'])
  onClick() {
    this.geraLayout()
    console.log('teste')
 }

  historia!: any
  _elemento!: any
  historiaHash!: string



  geraLayout() {
    function filter(element: any, index: any, array: any) {
      return (element.id == window.location.hash)
    }
    if(window.location.hash){

    }
    var historiaFiltrada = this.historiaList.historiaList.filter(filter)
    this.historiaHash = window.location.hash
    this.historia = new Object
    this.historia = historiaFiltrada[0]
    this._elemento = document.querySelector('#historia')
    this._elemento.innerHTML = this.historia.corpo

  }
  constructor(private historiaList: Historias) {

  


}

ngOnInit(): void {
  this.geraLayout()


}

}
