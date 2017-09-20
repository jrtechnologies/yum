import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PaginationComponent} from './pagination.component';
import { MdButtonModule  } from '@angular/material';
@NgModule({
  imports: [CommonModule, MdButtonModule ],
  declarations: [PaginationComponent],
  providers:  [ ],
  exports: [PaginationComponent]
})
export class PaginationModule {}