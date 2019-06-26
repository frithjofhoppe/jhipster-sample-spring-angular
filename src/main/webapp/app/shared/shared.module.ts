import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipsterSampleSpringAngularSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipsterSampleSpringAngularSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [JhipsterSampleSpringAngularSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleSpringAngularSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterSampleSpringAngularSharedModule
    };
  }
}
