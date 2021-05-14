import { Component, HostListener, OnInit } from '@angular/core';
import { Historias } from 'src/app/database/infos/historias';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css'],
  providers: [ Historias ]
})
export class HistoriaComponent implements OnInit {
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
    
    var historiaFiltrada = this.historiaList.historiaList.filter(filter)
    this.historiaHash = window.location.hash
    this.historia = new Object
    this.historia = historiaFiltrada[0]
    this._elemento = document.querySelector('#historia')
    this._elemento.innerHTML = this.historia.corpo

  }
  perfil = false

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.onScroll()
    }
  
  onScroll() {
    var navegador = document.getElementsByName('menu-fixo')[0]
    var menu = document.getElementsByName('menu-fixo')[1]

    if (window.scrollY >= (navegador.offsetTop - 10)) {
      navegador.setAttribute('style', "position: fixed; top: 10px")
      menu.setAttribute('style', "position: fixed; top: 10px")
      
    }
    if (window.scrollY <= 264) {
      navegador.setAttribute('style', "")
      menu.setAttribute('style', "")
    }
  }

  constructor(private historiaList: Historias) { }


  ngOnInit(): void {
    this.geraLayout()
  }
}
