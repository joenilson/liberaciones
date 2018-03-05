import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { PurchaseRequestPage } from '../purchase-request/purchase-request';
import { PurchaseOrderPage } from '../purchase-order/purchase-order';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
/**
 * Generated class for the TablistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tablist',
  templateUrl: 'tablist.html',
})
export class TablistPage {

  public tab1Root = HomePage;
  public tab2Root = PurchaseRequestPage;
  public tab3Root = PurchaseOrderPage;
  public tab4Root = SettingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'menuId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TablistPage');
  }

}
