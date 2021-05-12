import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { concat } from 'rxjs';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

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

  constructor() { }


  ngOnInit(): void {

  }
}
