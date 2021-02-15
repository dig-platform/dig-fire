import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DigAppInjectionService} from './dig-app-injection.service';
import {DigAppOptions} from './interfaces';
import {DigFire} from './dig-fire';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class DigFireModule {
  static forRoot(digApp: DigAppOptions): ModuleWithProviders<DigFireModule> {
    return {
      ngModule: DigFireModule,
      providers: [
        {
          provide: DigAppInjectionService,
          useValue: digApp
        },
        DigFire,
      ]
    };
  }
}

