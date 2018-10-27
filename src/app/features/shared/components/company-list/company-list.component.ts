import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'rs-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  @Input()
  pageTitle: string;

  @Input()
  companyList$: Observable<Company[]>;

  constructor() {}

  ngOnInit() {}
}
