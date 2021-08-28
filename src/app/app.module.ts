import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { CustPipeExpComponent } from './cust-pipe-exp/cust-pipe-exp.component';
import { SqrPipe } from './sqr.pipe';
import { DcpPipe } from './dcp.pipe';
import { TranformPipe } from './tranform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ContactComponent,
    CustPipeExpComponent,
    SqrPipe,
    DcpPipe,
    TranformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
