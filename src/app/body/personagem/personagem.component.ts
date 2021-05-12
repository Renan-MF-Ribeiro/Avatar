import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personagens } from 'src/app/database/infos/personagens';


@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css'],
  providers: [Personagens]
})
export class PersonagemComponent implements OnInit {

  constructor(private personagens:Personagens) { }
  personagensList!:any
listaPersonagens(){
  this.personagensList = new Object
  this.personagensList = this.personagens.personagensList
}
  ngOnInit(): void {
    this.listaPersonagens()
   }

  
  
}

