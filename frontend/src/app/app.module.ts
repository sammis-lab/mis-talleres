import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TallerListComponent } from './components/taller-list/taller-list.component';
import { TallerFormComponent } from './components/taller-form/taller-form.component';
import { TallerItemComponent } from './components/taller-item/taller-item.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { PortalPageComponent } from './components/portal-page/portal-page.component';

const routes: Routes = [
  { path: '', component: PortalPageComponent },
  { path: 'talleres', component: TallerListComponent },
  {
    path: 'perfil',
    component: AccountPageComponent,
    data: {
      title: 'Perfil',
      description: 'La información de perfil estará disponible cuando se habiliten las cuentas de usuario.'
    }
  },
  {
    path: 'configuracion',
    component: AccountPageComponent,
    data: {
      title: 'Configuración',
      description: 'Las preferencias de la aplicación estarán disponibles en una próxima actualización.'
    }
  },
  { path: 'create', component: TallerFormComponent },
  { path: 'edit/:id', component: TallerFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    TallerListComponent,
    TallerFormComponent,
    TallerItemComponent,
    AccountPageComponent,
    PortalPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
