import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GifsModule} from './gifs/gifs.module';
import {SharedModule} from './shared/shared.module';
import { provideHttpClient } from '@angular/common/http';

import { provideCacheableAnimationLoader, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

import 'animate.css';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GifsModule,
    SharedModule,
  ],
  providers: [provideHttpClient(),
    provideLottieOptions({ player: () => player }),
    provideCacheableAnimationLoader()],
  bootstrap: [AppComponent]
})
export class AppModule { }
