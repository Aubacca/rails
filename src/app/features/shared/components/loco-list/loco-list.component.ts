import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'rs-loco-list',
  templateUrl: './loco-list.component.html',
  styleUrls: ['./loco-list.component.css']
})
export class LocoListComponent implements OnInit {
  @Input()
  pageTitle: string;
  @Input()
  locoList$: Observable<Vehicle[]>;

  constructor() {}

  ngOnInit() {}
}
