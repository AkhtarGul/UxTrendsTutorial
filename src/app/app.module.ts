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

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,PropertybindingComponent,ClassStyleComponent,EventBindingComponent,TwoWayBindngComponent,NgswtichComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
