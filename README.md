# RailStock

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Development database

Run `npm run startDb` for a dev database which then can be called from the application REST api services.
Database will be available at `http://localhost:3000/`. For more details check `package.json`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Read it!

<a href="https://www.typescriptlang.org/docs/handbook/advanced-types.html" target="_blank">Advanced Types</a>
<a href="https://basarat.gitbooks.io/typescript/docs/types/type-system.html" target="_blank">TypeScript Type System</a>
<a href="https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c" target="_blank">Interface vs Type alias in TypeScript 2.7</a>

# Add NgRx Store

## Best Practice #1 — The Root Store Module

1. Install packages via NPM:

```cmd
npm install @ngrx/{store,store-devtools,entity,effects}
```

otherwise use this statement:

```cmd
npm install @ngrx/store @ngrx/effects @ngrx/store-devtools --save
```

2. Generate RootStoreModule:

```cmd
ng g module root-store —-flat false —-module app.module.ts
```

3. Generate RootState interface to represent the entire state of your application:

```cmd
ng g interface root-store/root-state
```

## Best Practice #2 — Create Feature Store Module(s)

Suggested Implementation — Standard Feature Module

1. Generate MyFeatureStoreModule feature module

```cmd
ng g module root-store/my-feature-store --flat false --module root-store/root-store.module.ts
```

2. Actions — Create an actions.ts file in the app/root-store/my-feature-store directory:

```javaScript
import { Action } from '@ngrx/store';
import { User } from '../../models';

export enum ActionTypes {
  LOGIN_REQUEST = '[My Feature] Login Request',
  LOGIN_FAILURE = '[My Feature] Login Failure',
  LOGIN_SUCCESS = '[My Feature] Login Success'
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;
  constructor(public payload: { userName: string; password: string }) {}
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export type Actions = LoginRequestAction | LoginFailureAction | LoginSuccessAction;
```

3. State — Create a state.ts file in the app/root-store/my-feature-store directory

```javascript
import { User } from '../../models';

export interface State {
  user: User | null;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  user: null,
  isLoading: false,
  error: null
};
```

4. Reducer — Create a reducer.ts file in the app/root-store/my-feature-store directory

```javascript
import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        isLoading: false
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      };
    default: {
      return state;
    }
  }
}
```

5. Selectors — Create a selectors.ts file in the app/root-store/my-feature-store directory

```javascript
import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { User } from '../../models';

import { State } from './state';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getUser = (state: State): any => state.user;

export const selectMyFeatureState: MemoizedSelector<object, State> =
  createFeatureSelector < State > 'myFeature';

export const selectMyFeatureError: MemoizedSelector<
  object,
  any
> = createSelector(selectMyFeatureState, getError);

export const selectMyFeatureIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectMyFeatureState, getIsLoading);

export const selectMyFeatureUser: MemoizedSelector<
  object,
  User
> = createSelector(selectMyFeatureState, getUser);
```

6. Effects — Create an effects.ts file in the app/root-store/my-feature-store directory with the following

```javascript
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import * as featureActions from './actions';

@Injectable()
export class MyFeatureStoreEffects {
  constructor(private dataService: DataService, private actions$: Actions) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoginRequestAction>(
      featureActions.ActionTypes.LOGIN_REQUEST
    ),
    switchMap(action =>
      this.dataService
	.login(action.payload.userName, action.payload.password)
	.pipe(
	  map(
	    user =>
	      new featureActions.LoginSuccessAction({
		user
	      })
	  ),
	  catchError(error =>
	    observableOf(new featureActions.LoginFailureAction({ error }))
	  )
	)
    )
  );
}
```

7. Update the app/root-store/my-feature-store/my-feature-store.module.ts with the following

```javascript
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MyFeatureStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('myFeature', featureReducer),
    EffectsModule.forFeature([MyFeatureStoreEffects])
  ],
  providers: [MyFeatureStoreEffects]
})
export class MyFeatureStoreModule {}
```

8. Create an app/root-store/my-feature-store/index.ts barrel export

```javascript
import * as MyFeatureStoreActions from './actions';
import * as MyFeatureStoreSelectors from './selectors';
import * as MyFeatureStoreState from './state';

export { MyFeatureStoreModule } from './my-feature-store.module';

export { MyFeatureStoreActions, MyFeatureStoreSelectors, MyFeatureStoreState };
```

9. Update app/root-store/root-state.ts and add a property for each feature that we have created previously

```javascript
import { MyFeatureStoreState } from './my-feature-store';
import { MyOtherFeatureStoreState } from './my-other-feature-store';

export interface State {
  myFeature: MyFeatureStoreState.State;
  myOtherFeature: MyOtherFeatureStoreState.State;
}
```

10. Update your app/root-store/root-store.module.ts by importing all feature modules, and importing the following NgRx modules

_StoreModule.forRoot({}) and EffectsModule.forRoot([]):_

```javascript
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MyFeatureStoreModule } from './my-feature-store/';
import { MyOtherFeatureStoreModule } from './my-other-feature-store/';

@NgModule({
  imports: [
    CommonModule,
    MyFeatureStoreModule,
    MyOtherFeatureStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule {}
```

11. Create an app/root-store/selectors.ts file. This will hold any root state level selectors, such as a Loading property, or even an aggregate Error property

```javascript
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { MyFeatureStoreSelectors } from './my-feature-store';

import { MyOtherFeatureStoreSelectors } from './my-other-feature-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  MyFeatureStoreSelectors.selectMyFeatureError,
  MyOtherFeatureStoreSelectors.selectMyOtherFeatureError,
  (myFeatureError: string, myOtherFeatureError: string) => {
    return myFeature || myOtherFeature;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  MyFeatureStoreSelectors.selectMyFeatureIsLoading,
  MyOtherFeatureStoreSelectors.selectMyOtherFeatureIsLoading,
  (myFeature: boolean, myOtherFeature: boolean) => {
    return myFeature || myOtherFeature;
  }
);
```

12. Create an app/root-store/index.ts barrel export for your store with the following

```javascript
import { RootStoreModule } from './root-store.module';
import * as RootStoreSelectors from './selectors';
import * as RootStoreState from './state';
export * from './my-feature-store';
export * from './my-other-feature-store';
export { RootStoreState, RootStoreSelectors, RootStoreModule };
```

## Wiring up the Root Store Module to your Application

Now that we have built our Root Store Module, composed of Feature Store Modules, let’s add it to the main app.module.ts and show just how neat and clean the wiring up process is.

1. Add RootStoreModule to your application’s NgModule.imports array. Make sure that when you import the module to pull from the barrel export

```javascript
import { RootStoreModule } from ‘./root-store’;
```

2. Here’s an example container component that is using the store

```javascript
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MyModel } from '../../models';
import {
  RootStoreState,
  MyFeatureStoreActions,
  MyFeatureStoreSelectors
} from '../../root-store';

@Component({
  selector: 'app-my-feature',
  styleUrls: ['my-feature.component.css'],
  templateUrl: './my-feature.component.html'
})
export class MyFeatureComponent implements OnInit {
  myFeatureItems$: Observable<MyModel[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.myFeatureItems$ = this.store$.select(
      MyFeatureStoreSelectors.selectAllMyFeatureItems
    );

    this.error$ = this.store$.select(
      MyFeatureStoreSelectors.selectUnProcessedDocumentError
    );

    this.isLoading$ = this.store$.select(
      MyFeatureStoreSelectors.selectUnProcessedDocumentIsLoading
    );

    this.store$.dispatch(
      new MyFeatureStoreActions.LoadRequestAction()
    );
  }
}
```
