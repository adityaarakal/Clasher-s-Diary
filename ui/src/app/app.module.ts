import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { DonateWarTroopsModule } from './donateWarTroops/donate-war-troops.module';
import { PageNotFoundComponent } from './commonComponents/page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PlayersModule } from './players/players.module';
import { HomeModule } from './home/home.module';

import { CocIntercept } from './coc-intercept';

import {ServiceWorkerModule} from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    DonateWarTroopsModule,
    SharedModule,
    HttpClientModule,
    PlayersModule,
    HomeModule,
    ServiceWorkerModule,
    AppRoutingModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CocIntercept, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
