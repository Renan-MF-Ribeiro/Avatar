import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Historias } from 'src/app/database/infos/historias';

@Component({
  selector: 'app-tlk',
  templateUrl: './tlk.component.html',
  styleUrls: ['./tlk.component.css'],
  providers: [Historias]
})
export class TlkComponent implements OnInit {

  historia!: any
  _elemento!: any
  
  

  geraLayout(){
    function filter(element: any, index: any, array: any) {
      return (element.id == (window.location.pathname.slice(10)))
    }
    var historiaFiltrada
    
    historiaFiltrada= this.historiaList.historiaList.filter(filter)

    this.historia = new Object
    this.historia = historiaFiltrada[0]
    this._elemento = document.querySelector('#historia')
    this._elemento.innerHTML = this.historia.corpo
    if(this.historia == undefined){
      this.historia = this.historiaList.historiaList[0]
    }
      }
  constructor(private  historiaList: Historias) { 
    
    
  }

  ngOnInit(): void {
    this.geraLayout()
    console.log(window.location.pathname.slice(10))
  }

}
