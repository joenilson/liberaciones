import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  idioms: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private translateService: TranslateService,
    private menuCtrl: MenuController) {
      this.menuCtrl.enable(true, 'menuId');
    this.idioms = [
      {
        value: 'es',
        label: 'Español'
      },
      {
        value: 'en',
        label: 'English'
      },
      {
        value: 'pt',
        label: 'Portugues'
      },
      {
        value: 'fr',
        label: 'Francês'
      }
    ];
  }

  choose(lang) {
    this.translateService.use(lang);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
