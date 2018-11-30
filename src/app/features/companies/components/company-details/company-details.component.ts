import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CompaniesService } from 'src/app/features/companies/services/companies.service';
import { Company } from '../../../../models/models';

@Component({
  selector: 'rs-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  private formGroupOne: FormGroup;
  private formGroupTwo: FormGroup;
  private companyDetail$: Observable<Company>;

  public companyDetailsTwo: Company;

  constructor(
    private _fb: FormBuilder,
    private _companiesServicee: CompaniesService
  ) {
    this.initForm();
  }

  ngOnInit() {
    this.companyDetail$ = this._companiesServicee.findByCode('VHB');
    //
    this._companiesServicee.findByCode('SBB').subscribe(data => {
      this.companyDetailsTwo = data;
      console.log('CompanyDetailsComponent.ngOnInit>data', data);
      this.formGroupTwo.patchValue(data[0]);
    });
  }

  private initForm() {
    console.log('CompanyDetailsComponent.initForm>begin');
    // Setup reactive form.
    this.formGroupOne = this._fb.group({
      code: [null, Validators.required],
      desc: [null, Validators.required]
    });
    this.formGroupTwo = this._fb.group({
      code: [null, Validators.required],
      desc: [null, Validators.required]
    });
    console.log('CompanyDetailsComponent.initForm>end');
  }

  get detailForm() {
    return this.formGroupOne;
  }

  get detailFormTwo() {
    return this.formGroupTwo;
  }

  onSubmit() {
    console.log('formGroupOne value:', this.formGroupOne);
    console.log('formGroupOne value:', this.formGroupOne.value);
  }

  onSubmitTwo() {
    console.log('formGroupTwo value:', this.formGroupTwo);
    console.log('formGroupTwo value:', this.formGroupTwo.value);
  }
}
