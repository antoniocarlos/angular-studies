import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
// Todo módulo extra deve ser importado e acrescentado aos imports como é o caso de formsModule;
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBidingComponent,
    DirectivesComponent,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
