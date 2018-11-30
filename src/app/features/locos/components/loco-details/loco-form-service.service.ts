import { Injectable } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Injectable()
export class LocoFormService {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  private initForm() {
    console.log('LocoFormService.initForm>begin');
    // Setup reactive form.
    this.form = this.fb.group({
      // id: [null, Validators.required],
      anzahl: [null, Validators.required],
      bemerkung: [null],
      bezeichnung: [null, Validators.required],
      companyCode: [null, Validators.required],
      epoche: [null, Validators.required],
      farbe: [null],
      hersteller: [null, Validators.required],
      lokType: [null, Validators.required],
      nummer: [null, Validators.required],
      preis: [null],
      vehicleKind: [{ value: 'LOK', disabled: true }, Validators.required],
      vehicleType: [null, Validators.required]
    });
    // { validator: this.pizzaValidatorsService.formValidator() }
    console.log('LocoFormService.initForm>end');
  }
}
