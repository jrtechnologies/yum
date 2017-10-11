import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MdGridListModule, MdSelectModule , MdProgressBarModule, MdButtonModule, MdInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ProfileComponent, DeletePictureDialog } from '../profile/profile.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [CommonModule,  MdGridListModule, MdSelectModule, FormsModule, ReactiveFormsModule, FileUploadModule, MdProgressBarModule, MdButtonModule, MdInputModule ],
  declarations: [ ProfileComponent, DeletePictureDialog],  
  exports: [ProfileComponent]
})
export class ProfileModule {}