import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModule } from './modules/ui/ui.module';
import { RoutingModule } from './modules/routing/routing.module';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LeftSideBarComponent } from './components/common/left-side-bar/left-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    LeftSideBarComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
