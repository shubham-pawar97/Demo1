import { NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MymoduleModule } from './mymodule/mymodule.module';
import { TemplateModule } from './template/template.module';
import { Login2Component } from './login2/login2.component';
import { HighlightPipe } from './highlight.pipe';
import { SearchingComponent } from './searching/searching.component';
import { FirstServiceService } from './first-service.service';
import { User2ChildComponent } from './user2-child/user2-child.component';
import { User2Component } from './user2/user2.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IndexDirective } from './index.directive'
import { StoreModule } from '@ngrx/store';
import { newReducer} from './Store/reducer';
import { ReduxDemoComponent } from './redux-demo/redux-demo.component';




@NgModule({
  declarations: [
    AppComponent,LoginComponent, Login2Component, HighlightPipe, SearchingComponent,
    User2Component,User2ChildComponent, IndexDirective,ReduxDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({data:newReducer})
    
    
  ],
  providers: [FirstServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
