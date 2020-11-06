import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [HeaderComponent, NavbarComponent, FooterComponent, NotfoundComponent, CustomerComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports: [HeaderComponent, NavbarComponent, FooterComponent, NotfoundComponent, CustomerComponent]
})
export class LayoutModule { }
