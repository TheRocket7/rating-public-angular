import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ModalModule, TabsModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SelectDropDownModule } from 'ngx-select-dropdown'

//Components
import { AppComponent } from './app.component';
import { StartPageComponent } from './forms/start-page/start-page.component';
import { RateUsComponent } from './forms/rate-us/rate-us.component';
import { SettingsComponent } from './forms/settings/settings.component';
import { StatisticsComponent } from './forms/statistics/statistics.component';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    RateUsComponent,
    SettingsComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    SelectDropDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
