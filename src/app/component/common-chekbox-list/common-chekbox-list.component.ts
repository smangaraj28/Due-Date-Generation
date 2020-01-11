import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-common-chekbox-list',
  templateUrl: './common-chekbox-list.component.html',
  styleUrls: ['./common-chekbox-list.component.css']
})
export class CommonChekboxListComponent implements OnInit {
 @Input() checkboxList;
 @Input() flexClass;

  constructor() {
  }

  ngOnInit() {
  }

}
