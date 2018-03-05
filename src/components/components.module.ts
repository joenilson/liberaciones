import { NgModule } from '@angular/core';
import { HeaderMenuComponent } from './header-menu/header-menu';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [HeaderMenuComponent],
	imports: [TranslateModule],
	exports: [HeaderMenuComponent]
})
export class ComponentsModule {}
