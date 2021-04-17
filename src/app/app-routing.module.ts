import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MymoduleModule } from './mymodule/mymodule.module';
import { TemplateModule } from './template/template.module';

const routes: Routes = [
{path: 'demo2', loadChildren: './template/template.module#TemplateModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),TemplateModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
