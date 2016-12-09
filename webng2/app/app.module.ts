import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing, declarations } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';
import { Main }  from './Component/Main/Main/Main';
import { providers } from './phpangular';
/*import { AjaxService } from './Service/ajax.service';
import { UrlService } from './Service/url.service';
import { RepositoryService } from './Service/repository.service';
import { EntityManager } from './Service/entity.manager.service';*/

var Providers : any = [];
Providers.push(providers);

@NgModule({
    imports: [
      BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    declarations: declarations,
    bootstrap:    [ Main ],
    providers: Providers

})
export class AppModule { }
