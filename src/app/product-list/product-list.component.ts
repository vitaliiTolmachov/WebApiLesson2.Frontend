import { Component, OnInit } from "@angular/core";
import { ProductService } from "../shared/services/product.service";
import { Router } from "@angular/router";
import { Product } from "../shared/product.module";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit() {
    this.loadProducts();
  }
  loadProducts () {
    this.service.getAll().subscribe(
       incomingProducts => {
         console.log(incomingProducts);
         this.products = incomingProducts;
       },
      (err) => console.error("error"),
      () => console.log("Done!"));
  }

  deleteProduct (product: Product) {
    this.service.deleteProduct(product.Id).subscribe(
      data => this.loadProducts(),
      (err) => console.log("error"),
      () => console.log(product));
  }

  editProduct(Id: number) {
    this.router.navigate(["products/edit", Id]);
  }

  createProduct() {
    this.router.navigate(["products/create"]);
  }
}
