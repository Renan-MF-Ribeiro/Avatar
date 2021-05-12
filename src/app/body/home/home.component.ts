import { Component, OnInit } from '@angular/core';
import { Noticias } from 'src/app/database/infos/noticias';
import { Noticia } from 'src/app/database/models/noticia.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Noticias]
})
export class HomeComponent implements OnInit {
  noticias: Array<Noticia> = this.news.noticiasList
  mainisHidden = true
  menu_aang = false
  menu_korra = false
  menu_filme = false
  menu_hq = false

  constructor(private news: Noticias) { }

  menu(menu: string) {
    switch (menu) {
      case "principal":
        this.mainisHidden = true
        this.menu_aang = false
        this.menu_korra = false
        this.menu_filme = false
        this.menu_hq = false
        break
      case "aang":
        this.mainisHidden = false
        this.menu_aang = true
        this.menu_korra = false
        this.menu_filme = false
        this.menu_hq = false
        break
      case "korra":
        this.mainisHidden = false
        this.menu_aang = false
        this.menu_korra = true
        this.menu_filme = false
        this.menu_hq = false
        break
      case "filme":
        this.mainisHidden = false
        this.menu_aang = false
        this.menu_korra = false
        this.menu_filme = true
        this.menu_hq = false
        break
      case "hq":
        this.mainisHidden = false
        this.menu_aang = false
        this.menu_korra = false
        this.menu_filme = false
        this.menu_hq = true
        break


    }
  }

  ngOnInit(): void {

  }

}
