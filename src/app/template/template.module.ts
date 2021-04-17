import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template/template.component';
import { TemplateDirective } from './template.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TemplateComponent, TemplateDirective],
  imports: [
    CommonModule,
    TemplateRoutingModule,FormsModule
  ]
})
export class TemplateModule { }
