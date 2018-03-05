import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the PurchaseOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchase-order',
  templateUrl: 'purchase-order.html',
})
export class PurchaseOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'menuId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseOrderPage');
  }

}
