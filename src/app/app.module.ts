import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule, MatDialogModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule, MatTableModule,
  MatTabsModule
} from '@angular/material';
import {FrequencyTabComponent} from './component/frequency-tab/frequency-tab.component';
import {TimeSetComponent} from './component/time-set/time-set.component';
import {FormsModule} from '@angular/forms';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {DailyComponent} from './component/tab-component/daily/daily.component';
import {WeeklyComponent} from './component/tab-component/weekly/weekly.component';
import {MonthlyComponent} from './component/tab-component/monthly/monthly.component';
import {YearlyComponent} from './component/tab-component/yearly/yearly.component';
import {OneTimeComponent} from './component/tab-component/one-time/one-time.component';
import {CommonChekboxListComponent} from './component/common-chekbox-list/common-chekbox-list.component';
import {DynamicModule} from 'ng-dynamic-component';
import {OnCompletionOffComponent} from './component/on-completion-off/on-completion-off.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { ScoreCardComponent } from './score-card/score-card/score-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FrequencyTabComponent,
    TimeSetComponent,
    DailyComponent,
    WeeklyComponent,
    MonthlyComponent,
    YearlyComponent,
    OneTimeComponent,
    CommonChekboxListComponent,
    OnCompletionOffComponent,
    DialogBoxComponent,
    ScoreCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    DynamicModule.withComponents([DailyComponent, WeeklyComponent,
      MonthlyComponent, YearlyComponent, OneTimeComponent, OnCompletionOffComponent]),
    MatCardModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogBoxComponent
  ]
})
export class AppModule {
}
