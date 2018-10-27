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
      lokType: [{ value: 'LOK', disabled: true }, Validators.required],
      companyCode: [null, Validators.required],
      epoche: [null, Validators.required],
      bezeichnung: [null, Validators.required],
      nummer: [null, Validators.required],
      hersteller: [null, Validators.required],
      preis: [null, Validators.required],
      bemerkung: [null, Validators.required]
    });
    // { validator: this.pizzaValidatorsService.formValidator() }
    console.log('LocoFormService.initForm>end');
  }
}
