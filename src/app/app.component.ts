import { Component } from '@angular/core';
import {
  Router,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '../../node_modules/@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootStoreState } from 'src/app/root-store';
import { isLoadingSpinnerActive } from './root-store/spinner-store/selectors';

@Component({
  selector: 'rs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample Stock';
  isLoadingAsBoolean: boolean;
  isLoading: Observable<boolean>;

  constructor(
    private _router: Router,
    private _store$: Store<RootStoreState.RootState>
  ) {
    _router.events.subscribe((routerEvent: RouterEvent) => {
      this.checkRouterEvent(routerEvent);
    });
    //
    // this.isLoading = this._store$.pipe(select(isLoadingSpinnerActive));
  }

  private checkRouterEvent(routerEvent: RouterEvent): void {
    // throw new Error('Method not implemented.');
    if (routerEvent instanceof NavigationStart) {
      this.isLoadingAsBoolean = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      setTimeout(() => {
        this.isLoadingAsBoolean = false;
      }, 1000);
    }
  }
}
