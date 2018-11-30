import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective
} from '@angular/forms';

import { LokosService } from 'src/app/features/overview/services/lokos.service';
import { LocoFormService } from './loco-form-service.service';
import {
  RootStoreState,
  LocoStoreSelectors,
  LocoStoreActions
} from 'src/app/root-store';
import { Vehicle } from 'src/app/models/models';

@Component({
  selector: 'rs-loco-details',
  templateUrl: './loco-details.component.html',
  styleUrls: ['./loco-details.component.css'],
  providers: [LocoFormService]
})
export class LocoDetailsComponent implements OnInit {
  locoDetails$: Observable<Vehicle>;
  myLocoDetail$: Observable<Vehicle>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private _locoServie: LokosService,
    private _formServie: LocoFormService,
    private store$: Store<RootStoreState.RootState>
  ) {}

  ngOnInit() {
    console.log('LocoDetailsComponent.ngOnInit>begin');
    // Load detail data.
    const locoNummer = this.route.snapshot.paramMap.get('id');
    this.locoDetails$ = this._locoServie.findByNumber(locoNummer);
    //
    // this._formServie.form.patchValue({
    //   nummer: 12345678
    // });
    // this._formServie.form.markAsTouched({ onlySelf: true });
    //
    this.init(locoNummer);
    console.log('LocoDetailsComponent.ngOnInit>end');
  }

  get newLocoForm() {
    return this._formServie.form;
  }

  public onSubmit() {
    console.log('LocoDetailsComponent.onSubmit>form value:', this.newLocoForm);
    console.log(
      'LocoDetailsComponent.onSubmit>html form value:',
      this.newLocoForm.value
    );
    console.log(
      'LocoDetailsComponent.onSubmit>ts form value:',
      this._formServie.form.value
    );
    // this._locoServie
    //   .updateLoco(this.newLocoForm.value)
    //   .subscribe(updatedLoco =>
    //     console.log('LocoDetailsComponent.onSubmit>updatedLoco:', updatedLoco)
    //   );
  }

  private init(locoNummer: string) {
    this.myLocoDetail$ = this.store$.pipe(
      select(LocoStoreSelectors.selectLocoDetail)
    );

    this.error$ = this.store$.pipe(
      select(LocoStoreSelectors.selectMyFeatureError)
    );

    // this.isLoading$ = this.store$.select(
    //   MyFeatureStoreSelectors.selectUnProcessedDocumentIsLoading
    // );

    this.store$.dispatch(
      new LocoStoreActions.GetLocoOne({
        nummer: locoNummer
      })
    );
  }
}
