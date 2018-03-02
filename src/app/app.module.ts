import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CategoryListComponent } from "./category-list/category-list.component";
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "./shared/services/product.service";
import { ProductEditorComponent } from "./product-editor/product-editor.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CategoryService} from "./shared/services/category.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryListComponent,
    ProductEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
