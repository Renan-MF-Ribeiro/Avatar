import { Component, HostListener, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Personagens } from '../database/infos/personagens';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [Personagens]
})
export class NavbarComponent implements OnInit {
  personaTopo!: any
  colorTopo!: any
  sidenavMenu = false
  imgTopo = false
  nomadesAr!: any
  triboAguaSul!: any
  triboAguaNorte!: any
  cidadeRepublica!: any
  nacaoFogo!: any
  reinoTerra!: any
  perfil = false
  perfilFull = true
  rodape=scrollY
  
  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    this.perfilF()
  }
  perfilF(){
    if(window.scrollY >= 500){
      
      this.perfil=true}
    
  }
  persona() {
    var indice = Math.floor(Math.random() * (this.personagem.personagensList.length))
    this.personaTopo = this.personagem.personagensList[indice]
    
    switch (this.personaTopo.etnia) {
      case "Nação do Fogo":
        this.colorTopo = "#6F180D"
        break;
      case "Nômades do Ar":
        this.colorTopo = "#D67838"
        break;
      case "Tribo da Água do Sul":
        this.colorTopo = "#004B89"
        break;
      case "Tribo da Água do Norte":
        this.colorTopo = "#004B85"
        break;
      case "Reino da Terra":
        this.colorTopo = "#3A7614"
        break;
    }
    if (this.personaTopo.img.etnia == "assets/Elementos/cidade_republica.png") {
      this.imgTopo = true
    }

  }
  personagensGrupo() {
    function arNomad(element: any, index: any, array: any) {
      return (element.nascionalidade == "Nômades do Ar")
    }
    this.nomadesAr = new Object
    this.nomadesAr = this.personagem.personagensList.filter(arNomad)
    
    function aguaSul(element: any, index: any, array: any) {
      return (element.nascionalidade == "Tribo da Água do Sul")
    }
    this.triboAguaSul = new Object
    this.triboAguaSul = this.personagem.personagensList.filter(aguaSul)

    function aguaNorte(element: any, index: any, array: any) {
      return (element.nascionalidade == "Tribo da Água do Norte")
    }
    this.triboAguaNorte = new Object
    this.triboAguaNorte = this.personagem.personagensList.filter(aguaNorte)

    function reinoTerra(element: any, index: any, array: any) {
      return (element.nascionalidade == "Reino da Terra")
    }
    this.reinoTerra = new Object
    this.reinoTerra = this.personagem.personagensList.filter(reinoTerra)

    function nacaoFogo(element: any, index: any, array: any) {
      return (element.nascionalidade == "Nação do Fogo")
    }
    this.nacaoFogo = new Object
    this.nacaoFogo = this.personagem.personagensList.filter(nacaoFogo)

    function cidadeRepublica(element: any, index: any, array: any) {
      return (element.nascionalidade == "Cidade República, República Unida")
    }
    this.cidadeRepublica = new Object
    this.cidadeRepublica = this.personagem.personagensList.filter(cidadeRepublica)

  }


  constructor(private personagem: Personagens) { }

  ngOnInit() {
    this.persona()
    this.personagensGrupo()
    console.log(window.scrollY)
  }

}