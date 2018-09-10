import { Component } from "@angular/core";
import {
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "../../node_modules/@angular/router";

@Component({
  selector: "rs-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Sample Stock";
  isLoading: boolean;

  constructor(private _router: Router) {
    _router.events.subscribe((routerEvent: RouterEvent) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  private checkRouterEvent(routerEvent: RouterEvent): void {
    // throw new Error("Method not implemented.");
    if (routerEvent instanceof NavigationStart) {
      this.isLoading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    }
  }
}
