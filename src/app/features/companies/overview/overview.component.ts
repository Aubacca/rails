import { CompaniesService } from './../services/companies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'rs-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  companyList$: Observable<Company[]>;

  constructor(private companyService$: CompaniesService) {}

  ngOnInit() {
    this.init();
  }

  private init() {
    this.companyList$ = this.companyService$.findAll();
  }
}
