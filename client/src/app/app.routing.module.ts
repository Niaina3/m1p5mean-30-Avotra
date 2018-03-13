import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

var appRoutes: Routes = [
    {   path: '/',
        component: HomeComponent, 
    }
    //{ path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
  })


  export class AppRoutingModule { }
  