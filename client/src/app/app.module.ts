import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { HomePageComponent } from './home-page/home-page.component';
import { GroupsComponent } from './groups/groups.component';
import { WhiskeyTypesComponent } from './whiskey-types/whiskey-types.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [			
    AppComponent,
    HomePageComponent,
    GroupsComponent,
    WhiskeyTypesComponent,
      RegisterComponent,
      MainComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    PanelModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    DialogModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
