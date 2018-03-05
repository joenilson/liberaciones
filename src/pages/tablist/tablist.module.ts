import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablistPage } from './tablist';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TablistPage,
  ],
  imports: [
    IonicPageModule.forChild(TablistPage),
    TranslateModule
  ],
})
export class TablistPageModule {}
