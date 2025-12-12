import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DemoDirective } from './directives/demo.directive';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateformComponent } from './pages/templateform/templateform.component';
import { ReactiveformComponent } from './pages/reactiveform/reactiveform.component';
import { UserPipe } from './pipes/user.pipe';
import { CustPipeComponent } from './pages/cust-pipe/cust-pipe.component';
import { CurencyPipe } from './pipes/curency.pipe';
import { CustDirective } from './directives/cust.directive';
import { CustDirectiveComponent } from './pages/cust-directive/cust-directive.component';
import { OnlyNumberDirective } from './directives/only-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoDirective,
    TemplateformComponent,
    ReactiveformComponent,
    UserPipe,
    CustPipeComponent,
    CurencyPipe,
    CustDirective,
    CustDirectiveComponent,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
