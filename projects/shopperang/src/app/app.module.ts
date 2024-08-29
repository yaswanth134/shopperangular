import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ExampleComponent } from './example/example.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { OfferingdealsComponent } from './offeringdeals/offeringdeals.component';
import { TopmonthsellerComponent } from './topmonthseller/topmonthseller.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExampleComponent,
    FooterComponent,
    HomePageComponent,
    AdvertiseComponent,
    OfferingdealsComponent,
    TopmonthsellerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HeaderComponent,FooterComponent,HomePageComponent,AdvertiseComponent,OfferingdealsComponent,TopmonthsellerComponent]
})
export class AppModule { }
