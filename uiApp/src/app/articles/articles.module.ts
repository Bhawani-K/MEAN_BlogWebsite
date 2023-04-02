import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from "./articles-routing-module";
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ],
  exports:[LatestArticlesComponent]
})
export class ArticlesModule { }
