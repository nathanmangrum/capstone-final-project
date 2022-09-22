import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WhiskeyTypesComponent } from './whiskey-types/whiskey-types.component';

const routes: Routes = [
  { path: '',
    component: HomePageComponent
  },
  { path: 'whiskies',
    component: WhiskeyTypesComponent
  },
  {
    path: 'tasting-groups',
    component: GroupsComponent
  },
  {
    path: '**',
    component: HomePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
