import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';

import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    EditComponent,
    IndexComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
