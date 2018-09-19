import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MyLocoStoreModule } from './my-loco-store/my-loco-store.module';

@NgModule({
  imports: [
    CommonModule,
    MyLocoStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule { }
