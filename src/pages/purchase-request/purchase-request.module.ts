import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurchaseRequestPage } from './purchase-request';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    PurchaseRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(PurchaseRequestPage),
    TranslateModule
  ],
})
export class PurchaseRequestPageModule {}
