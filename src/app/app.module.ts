import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridRowComponent } from './components/grid-row/grid-row.component';
import { HttpClientModule } from '@angular/common/http';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';


@NgModule({
  declarations: [
    AppComponent,
    GridRowComponent,
    GridCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VirtualScrollerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
