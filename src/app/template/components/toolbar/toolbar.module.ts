import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar.component';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports     : [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
