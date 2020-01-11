import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatTable} from '@angular/material';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';
import {AddHolidayModel} from '../../model/add-holiday.model';


const ELEMENT_DATA: AddHolidayModel[] = [
  {id: 1, name: 'Holi', holidayDate: new Date('03-12-2013'), addedOn: new Date('03-12-2019')}
];

@Component({
  selector: 'app-on-completion-off',
  templateUrl: './on-completion-off.component.html',
  styleUrls: ['./on-completion-off.component.css']
})
export class OnCompletionOffComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  displayedColumns: string[] = ['name', 'holidayDate', 'addedOn', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  weekList = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun'
  ];

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '700px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(rowObj: AddHolidayModel) {
    const d = new Date();
    this.dataSource.push({
      id: d.getTime(),
      name: rowObj.name,
      addedOn: rowObj.addedOn,
      holidayDate: rowObj.holidayDate
    });
    this.table.renderRows();

  }

  updateRowData(rowObj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id === rowObj.id) {
        value.name = rowObj.name;
        value.holidayDate = rowObj.holidayDate;
      }
      return true;
    });
  }

  deleteRowData(rowObj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id !== rowObj.id;
    });
  }

  ngOnInit() {
  }

  submit() {

  }
}
