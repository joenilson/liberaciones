import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the PurchaseRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-purchase-request',
  templateUrl: 'purchase-request.html',
})
export class PurchaseRequestPage {
  request =[{
    numero: 400023456,
    fecha: '2018-01-12',
    solicitante: 'AMANTENIIENTO'
  },{
    numero: 400023457,
    fecha: '2018-01-12',
    solicitante: 'AMANTENIIENTO'
  },{
    numero: 400023458,
    fecha: '2018-01-12',
    solicitante: 'AMANTENIIENTO'
  },{
    numero: 400023459,
    fecha: '2018-01-12',
    solicitante: 'AMANTENIIENTO'
  },{
    numero: 400023460,
    fecha: '2018-01-12',
    solicitante: 'AMANTENIIENTO'
  },{
    numero: 400023461,
    fecha: '2018-01-12',
    solicitante: 'AMANTENIIENTO'
  },{
    numero: 400023462,
    fecha: '2018-01-12',
    solicitante: 'AMANTENIIENTO'
  },{
    numero: 400023463,
    fecha: '2018-01-12',
    solicitante: 'AMANTENIIENTO'
  },{
    numero: 400023464,
    fecha: '2018-01-12',
    solicitante: 'AMANTENIIENTO'
  },{
    numero: 400023465,
    fecha: '2018-01-12',
    solicitante: 'AMANTENIIENTO'
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private menuCtrl: MenuController) {
    this.menuCtrl.enable(true, 'menuId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PurchaseRequestPage');
  }

  itemSelected(item){
    console.log(item);
  }
}
