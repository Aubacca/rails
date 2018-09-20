import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OverviewModule } from './features/overview/overview.module';
import { LocosModule } from './features/locos/locos.module';
import { HomeComponent } from './components/home/home.component';
// import { RootStoreModule } from './root-store/root-store.module';
import { RootStoreModule } from './root-store';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverviewModule,
    LocosModule,
    RootStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 80 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
