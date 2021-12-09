import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindngComponent } from './two-way-bindng/two-way-bindng.component';
import { NgswtichComponent } from './ngswtich/ngswtich.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
];
@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    HelloComponent,
    PropertybindingComponent,
    ClassStyleComponent,
    EventBindingComponent,
    TwoWayBindngComponent,
    NgswtichComponent,
    ProductComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
