import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { OverviewModule } from "./features/overview/overview.module";
import { LocosModule } from "./features/locos/locos.module";
import { HomeComponent } from "./components/home/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, OverviewModule, LocosModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
