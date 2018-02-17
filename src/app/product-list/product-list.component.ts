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

  }

  loadProducts () {
    this.service.getAll().subscribe(
       products => this.products = products,
      (err) => console.error("error"),
      () => console.log("Done!"));
  }

  deleteProduct (product: Product) {
    this.service.deleteProduct(product.Id).subscribe(
      data => this.loadProducts(),
      (err) => console.log("error"),
      () => console.log(product));
  }
}
