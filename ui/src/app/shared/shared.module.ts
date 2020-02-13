import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { CreateNewComponent } from './create-new.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateNewComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule, FormsModule, ReactiveFormsModule,
    SharedRoutingModule
  ],
  exports: [
    CreateNewComponent
  ]
})
export class SharedModule { }