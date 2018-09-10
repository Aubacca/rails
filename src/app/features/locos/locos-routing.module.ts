import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const locosRoutes: Routes = [
  {
    path: "locos",
    children: [{ path: "", component: HomeComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(locosRoutes)],
  exports: [RouterModule]
})
export class LocosRoutingModule {}
