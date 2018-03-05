import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseOrderPage } from './purchase-order';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PurchaseOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseOrderPage),
    TranslateModule
  ],
})
export class PurchaseOrderPageModule {}
