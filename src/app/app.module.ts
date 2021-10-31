import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { OOPsComponent } from './home/oops/oops.component';
import { ObjectsComponent } from './home/oops/objects/objects.component';
import { AnimationComponent } from './home/animation/animation.component';
import { DataBindingComponent } from './home/data-binding/data-binding.component';
import { ArrayComponent } from './home/oops/array/array.component';
import { LocalStorageComponent } from './home/oops/local-storage/local-storage.component';
import { InterpolationComponent } from './home/data-binding/interpolation/interpolation.component';
import { EventBindingComponent } from './home/data-binding/event-binding/event-binding.component';
import { TwoWayComponent } from './home/data-binding/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './home/animation/nav/nav.component';
import { Horizontal1Component } from './home/animation/nav/horizontal1/horizontal1.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    OOPsComponent,
    ObjectsComponent,
    AnimationComponent,
    DataBindingComponent,
    ArrayComponent,
    LocalStorageComponent,
    InterpolationComponent,
    EventBindingComponent,
    TwoWayComponent,
    NavComponent,
    Horizontal1Component,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
