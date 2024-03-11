import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {TableModule} from 'primeng/table';
import { PaginatorComponent } from './paginator/paginator.component';
import {PaginatorModule} from 'primeng/paginator';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    ScrollingModule,
    PaginatorModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
