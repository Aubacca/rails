import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LocosRoutingModule } from "./locos-routing.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [CommonModule, LocosRoutingModule],
  declarations: [HomeComponent]
})
export class LocosModule {}
