import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import {AuthorizationInterceptor} from "./interceptor/authorization-interceptor";
import {LanguageInterceptor} from "./interceptor/language-interceptor";
import {ErrorHandlerInterceptor} from "./interceptor/error-handler-interceptor";
import {VersionInterceptor} from "./interceptor/version-interceptor";
import {KeyInterceptor} from "./interceptor/key-interceptor";
import {LoaderInterceptorService} from "./interceptor/loader-interceptor";



@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthorizationInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LanguageInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorHandlerInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: VersionInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: KeyInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: LoaderInterceptorService,
        multi: true
    }
]
})
export class CoreModule {}
