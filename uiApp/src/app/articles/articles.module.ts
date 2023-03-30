import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[LatestArticlesComponent]
})
export class ArticlesModule { }
