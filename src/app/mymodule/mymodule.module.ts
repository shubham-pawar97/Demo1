import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MymoduleRoutingModule } from './mymodule-routing.module';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { Module2Module } from '../module2/module2.module';
import { Component2Component } from '../module2/component2/component2.component';


@NgModule({
  declarations: [MycomponentComponent, NewcomponentComponent,],
  imports: [
    CommonModule,
    MymoduleRoutingModule,
    Module2Module,
  ]
})
export class MymoduleModule { }
