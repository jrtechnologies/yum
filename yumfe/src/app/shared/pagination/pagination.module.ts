import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { PaginationComponent} from './pagination.component';
import { MatButtonModule  } from '@angular/material';
@NgModule({
  imports: [CommonModule, MatButtonModule ],
  declarations: [PaginationComponent],
  providers:  [ ],
  exports: [PaginationComponent]
})
export class PaginationModule {}