import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import {ProductEditorComponent} from "./product-editor/product-editor.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "products"},
  { path: "products", component: ProductListComponent},
  { path: "products/edit/:id", component: ProductEditorComponent},
  { path: "products/create", component: ProductEditorComponent},
  { path: "categories", component: CategoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
