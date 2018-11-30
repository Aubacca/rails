import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CompaniesModule } from './features/companies/companies.module';
import { GwsModule } from './features/gws/gws.module';
import { HomeComponent } from './components/home/home.component';
import { LocosModule } from './features/locos/locos.module';
import { OverviewModule } from './features/overview/overview.module';
import { PwsModule } from './features/pws/pws.module';
import { RootStoreModule } from './root-store';
import { SharedModule } from './features/shared/shared.module';
import { SpinnerStoreModule } from './root-store/spinner-store';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 80 }),
    SpinnerStoreModule,
    RootStoreModule,
    OverviewModule,
    LocosModule,
    CompaniesModule,
    PwsModule,
    GwsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
