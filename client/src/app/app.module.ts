import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
