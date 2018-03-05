import { Component } from '@angular/core';
import { App, MenuController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';
import { PurchaseRequestPage } from '../../pages/purchase-request/purchase-request';
import { PurchaseOrderPage } from '../../pages/purchase-order/purchase-order';
import { SettingsPage } from '../../pages/settings/settings';
/**
 * Generated class for the HeaderMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {

  public tab1Root = HomePage;
  public tab2Root = PurchaseRequestPage;
  public tab3Root = PurchaseOrderPage;
  public tab4Root = SettingsPage;
  
  constructor(public menuCtrl: MenuController,
    public app: App) {
    console.log('Hello HeaderMenuComponent Component');
  }
  
  optionClicked(option) {
    this,this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(option);
  }

  logoutClicked() {
    console.log("Logout");
    //this.authService.logout();
    this.menuCtrl.close();
    var nav = this.app.getRootNav();
    nav.setRoot(LoginPage);
  }

}
