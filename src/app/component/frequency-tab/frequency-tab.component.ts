import {Component, OnInit} from '@angular/core';
import {TabItemModel} from '../../model/tab-item.model';
import {WeeklyComponent} from '../tab-component/weekly/weekly.component';
import {MonthlyComponent} from '../tab-component/monthly/monthly.component';
import {MatTabChangeEvent} from '@angular/material';
import {DailyComponent} from '../tab-component/daily/daily.component';
import {OneTimeComponent} from '../tab-component/one-time/one-time.component';
import {YearlyComponent} from '../tab-component/yearly/yearly.component';
import {OnCompletionOffComponent} from '../on-completion-off/on-completion-off.component';

@Component({
  selector: 'app-frequency-tab',
  templateUrl: './frequency-tab.component.html',
  styleUrls: ['./frequency-tab.component.css']
})
export class FrequencyTabComponent implements OnInit {
  tabItem: TabItemModel[] = [
    {
      name: 'DAILY'
    },
    {
      name: 'WEEKLY'
    },
    {
      name: 'MONTHLY'
    },
    {
      name: 'YEARLY'
    },
    {
      name: 'ONE-TIME'
    },
    {
      name: 'ON-COMPLETION-OFF'
    }
  ];
  component;
  timeSetFlag = true;
  selectedIndex = 0;
  maxNumberOfTabs = 6;
  footerFlag = true;

  constructor() {
  }

  ngOnInit() {
  }

  selectTabChange($event: MatTabChangeEvent) {
    console.log($event.tab.textLabel);
    switch ($event.tab.textLabel) {
      case 'DAILY':
        this.component = DailyComponent;
        this.timeSetFlag = true;
        this.footerFlag = true;
        break;
      case 'WEEKLY':
        this.component = WeeklyComponent;
        this.timeSetFlag = true;
        this.footerFlag = true;
        break;
      case 'MONTHLY':
        this.component = MonthlyComponent;
        this.timeSetFlag = true;
        this.footerFlag = true;
        break;
      case 'YEARLY':
        this.component = YearlyComponent;
        this.timeSetFlag = true;
        this.footerFlag = true;
        break;
      case 'ONE-TIME':
        this.component = OneTimeComponent;
        this.timeSetFlag = false;
        this.footerFlag = true;
        break;
      case 'ON-COMPLETION-OFF':
        this.component = OnCompletionOffComponent;
        this.timeSetFlag = false;
        this.footerFlag = false;
        break;
    }
  }

  nextStep() {
    if (this.selectedIndex !== this.maxNumberOfTabs) {
      this.selectedIndex = this.selectedIndex + 1;
    }
  }

  previousStep() {
    if (this.selectedIndex !== 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
  }

  cancel() {

  }
}
