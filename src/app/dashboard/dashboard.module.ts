import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
/* Common components */
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MainComponent } from './components/common/main/main.component';
/* Global update components */
import { TransWaveComponent } from './components/globalupdate/trans-wave/trans-wave.component';
import { DeliveyTypeComponent } from './components/globalupdate/delivey-type/delivey-type.component';
import { HolidayIndicatorComponent } from './components/globalupdate/holiday-indicator/holiday-indicator.component';
/* Product class update components */
import { AddProductComponent } from './components/product-update/add-product/add-product.component';
import { DeleteProductComponent } from './components/product-update/delete-product/delete-product.component';
import { ChangeProductComponent } from './components/product-update/change-product/change-product.component';
/* Query components */
import { QueryComponent } from './components/query/query/query.component';
/* Add delete order type components */
import { OrderTypeComponent } from './components/order-type/order-type/order-type.component';
/*Update component */
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TransWaveComponent,
    DeliveyTypeComponent,
    HolidayIndicatorComponent,
    AddProductComponent,
    DeleteProductComponent,
    ChangeProductComponent,
    QueryComponent,
    OrderTypeComponent,
    UpdateComponent
  ]
})
export class DashboardModule { }
