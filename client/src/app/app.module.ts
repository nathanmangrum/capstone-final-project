import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { HomePageComponent } from './home-page/home-page.component';
import { GroupsComponent } from './groups/groups.component';
import { WhiskeyTypesComponent } from './whiskey-types/whiskey-types.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GroupsComponent,
    WhiskeyTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    PanelModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
