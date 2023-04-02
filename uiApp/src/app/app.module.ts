import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ArticlesRoutingModule } from "./articles/articles-routing-module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { LatestArticlesComponent } from './articles/latest-articles/latest-articles.component';
import { FeaturedArticlesComponent } from './articles/featured-articles/featured-articles.component';
import { CategoriesComponent } from './articles/categories/categories.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
    LatestArticlesComponent,
    FeaturedArticlesComponent,
    CategoriesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ArticlesRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
