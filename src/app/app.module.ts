import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { OverviewModule } from './features/overview/overview.module';
// import { RootStoreModule } from './root-store/root-store.module';
import { LocosModule } from './features/locos/locos.module';
import { SpinnerStoreModule } from './root-store/spinner-store';
import { RootStoreModule } from './root-store';
import { CompaniesModule } from './features/companies/companies.module';
import { PwsModule } from './features/pws/pws.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverviewModule,
    LocosModule,
    SpinnerStoreModule,
    RootStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 80 }),
    CompaniesModule,
    PwsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
