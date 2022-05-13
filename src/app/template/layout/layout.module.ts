import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';


import { ContentModule } from './../components/content/content.module';
import { ToolbarModule } from './../components/toolbar/toolbar.module';
import { LayoutComponent } from './layout.component';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    ContentModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
