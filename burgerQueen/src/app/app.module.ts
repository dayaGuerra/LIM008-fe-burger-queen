import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
// componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionOrderComponent } from './section-order/section-order.component';
import { SectionLunchComponent } from './section-lunch/section-lunch.component';
import { HomeComponent } from './home/home.component';
import { SectionPantComponent } from './section-pant/section-pant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// servicios
import { DataApiService } from './services/data-api.service';
import { ServiceWorkerModule } from '@angular/service-worker'

// modulos components
//import { LunchModule } from './section-lunch/lunch/lunch.module'


@NgModule({
  declarations: [
    AppComponent,
    SectionOrderComponent,
    SectionLunchComponent,
    HomeComponent,
    SectionPantComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
   // LunchModule
  ],
  providers: [
    DataApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
