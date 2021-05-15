import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HistoriaModelComponent } from './body/historia/historia-model/historia-model.component';
import { HistoriaComponent } from './body/historia/historia.component';
import { HomeComponent } from './body/home/home.component';
import { Pag404Component } from './body/pag404/pag404.component';
import { PersonagemComponent } from './body/personagem/personagem.component';

const routes: Routes = [
  { path: '', component: BodyComponent,
  children:[
    {path:'', component: HomeComponent},
    {path:'personagens', component: PersonagemComponent},
    {path:'home', component: HomeComponent},
    {path:'historia', component: HistoriaComponent}
  ]
},
  {path: '**', component: Pag404Component }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
