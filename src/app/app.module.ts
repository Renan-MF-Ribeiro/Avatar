import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { PersonagemComponent } from './body/personagem/personagem.component';
import { HQComponent } from './body/hq/hq.component';
import { SerieComponent } from './body/serie/serie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './body/home/home.component';
import { Pag404Component } from './body/pag404/pag404.component';
import { HistoriaComponent } from './body/historia/historia.component';
import { AtlaComponent } from './body/historia/atla/atla.component';
import { TlkComponent } from './body/historia/tlk/tlk.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HistoriaModelComponent } from './body/historia/historia-model/historia-model.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    PersonagemComponent,
    HQComponent,
    SerieComponent,
    NavbarComponent,
    HomeComponent,
    Pag404Component,
    HistoriaComponent,
    AtlaComponent,
    TlkComponent,
    RodapeComponent,
    HistoriaModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
