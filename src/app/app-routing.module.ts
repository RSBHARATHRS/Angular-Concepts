import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { AnimationComponent } from './home/animation/animation.component';
import { DataBindingComponent } from './home/data-binding/data-binding.component';
import { EventBindingComponent } from './home/data-binding/event-binding/event-binding.component';
import { InterpolationComponent } from './home/data-binding/interpolation/interpolation.component';
import { TwoWayComponent } from './home/data-binding/two-way/two-way.component';
import { HomeComponent } from './home/home.component';
import { ArrayComponent } from './home/oops/array/array.component';
import { LocalStorageComponent } from './home/oops/local-storage/local-storage.component';
import { ObjectsComponent } from './home/oops/objects/objects.component';
import { OOPsComponent } from './home/oops/oops.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"welcome",
    pathMatch:"full",
  },
  {
    path:"welcome",
    component:WelcomeComponent
  },
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"oops",
        component:OOPsComponent,
        children:[
          {
            path:"object",
            component:ObjectsComponent
          },
          {
            path:"array",
            component:ArrayComponent
          },
          {
            path:"local-storage",
            component:LocalStorageComponent
          },
        ]
      },
      {
        path:"animation",
        component:AnimationComponent
      },
      {
        path:"databinding",
        component:DataBindingComponent,
        children:[
          {
            path:"interpolation",
            component:InterpolationComponent
          },
          {
            path:"event-binding",
            component:EventBindingComponent
          },
          {
            path:"two-way",
            component:TwoWayComponent
          }
        ]
      }
       
    ]
  },
  {
    path:"**",
    redirectTo:"error"
  },
  {
    path:"error",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
