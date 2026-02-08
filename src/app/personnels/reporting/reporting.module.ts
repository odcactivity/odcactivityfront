import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportingComponent } from './reporting.component';

@NgModule({
  declarations: [ReportingComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ReportingComponent]
})
export class ReportingModule {}
