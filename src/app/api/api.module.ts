/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AlumnosControllerService } from './services/alumnos-controller.service';
import { ClasesControllerService } from './services/clases-controller.service';
import { CursoControllerService } from './services/curso-controller.service';
import { DocentesControllerService } from './services/docentes-controller.service';
import { MatriculaControllerService } from './services/matricula-controller.service';
import { NotaControllerService } from './services/nota-controller.service';
import { PingControllerService } from './services/ping-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AlumnosControllerService,
    ClasesControllerService,
    CursoControllerService,
    DocentesControllerService,
    MatriculaControllerService,
    NotaControllerService,
    PingControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
