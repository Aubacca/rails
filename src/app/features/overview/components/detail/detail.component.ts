import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'rs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() vehicleType: string;
  @Input() detailList$: Observable<string[]>;

  constructor() {}

  ngOnInit() {}
}
