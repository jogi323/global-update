import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./dashboard.component";
/* Global update components */
import { TransWaveComponent } from './components/globalupdate/trans-wave/trans-wave.component';
import { DeliveyTypeComponent } from './components/globalupdate/delivey-type/delivey-type.component';
import { HolidayIndicatorComponent } from './components/globalupdate/holiday-indicator/holiday-indicator.component';

/* Product class update components */
import { AddProductComponent } from './components/product-update/add-product/add-product.component';
import { DeleteProductComponent } from './components/product-update/delete-product/delete-product.component';
import { ChangeProductComponent } from './components/product-update/change-product/change-product.component';

/* Query component*/
import { QueryComponent } from './components/query/query/query.component';
/* Add delete order type components */
import { OrderTypeComponent } from './components/order-type/order-type/order-type.component';

/*Update component import statement */
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path: '',component: DashboardComponent,children: [
      {
        path: '',redirectTo:'/dashboard/update', pathMatch: 'full'
      },
      {
        path:'update',component: UpdateComponent
      },
      /* Global update routing configuration */
      {
        path:'globalupdate',children: [
          {
            path: '',redirectTo:'/dashboard/globalupdate/transwave', pathMatch: 'full'
          },
          {
            path: 'transwave',component: TransWaveComponent
          },
          {
            path: 'deliverytype',component: DeliveyTypeComponent
          },
          {
            path: 'holidayindicator',component: HolidayIndicatorComponent
          }
        ]
      },
      /* Product class update routing configuration */
      {
        path:'productclassupdate',children: [
          {
            path: '',redirectTo:'/dashboard/productclassupdate/addproduct', pathMatch: 'full'
          },
          {
            path: 'addproduct',component: AddProductComponent
          },
          {
            path: 'deleteproduct',component: DeleteProductComponent
          },
          {
            path: 'changeproduct',component: ChangeProductComponent
          }
        ]
      },
      /* Add delete order type routing configuration */
      {
        path:'ordertype',component: OrderTypeComponent
      },
      /* Product class update routing configuration */
      {
        path:'query',component: QueryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
