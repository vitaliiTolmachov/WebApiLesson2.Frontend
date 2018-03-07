import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../shared/models/product.model";
import { ProductService } from "../shared/services/product.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Category } from "../shared/models/category.model";
import { CategoryService } from "../shared/services/category.service";
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: "app-product-editor",
  templateUrl: "./product-editor.component.html",
  styleUrls: ["./product-editor.component.css"]
})
export class ProductEditorComponent implements OnInit, OnDestroy {
  product: Product;
  productForm: FormGroup;
  categories: Category[];
  productId: number;
  private subscriptions: ISubscription[] = [];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) {
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription: ISubscription) => {
      subscription.unsubscribe();
    });
  }

  ngOnInit() {
    this.initProductForm();
    this.initCategoryList();
    this.initProductId();
    this.initProduct();
  }
  private initProductForm() {
    this.productForm = this.formBuilder.group(
      {
        Product: [{}, Validators.required],
        ProductName: ["", Validators.required],
        Category: [{}, Validators.required]
      });
  }
  onSubmit() {
    const subscription = this.productService.updateProduct(this.productForm.get("Product").value)
      .subscribe(
        value => {
          console.log(value);
          this.returnToList();
        });
    this.subscriptions.push(subscription);
  }

  private initProduct() {
    if (this.productId) {
      const subscription = this.productService.getProduct(this.productId)
        .subscribe(
          (inProduct: Product) => {
            this.setProductToForm(inProduct);
          });
      this.subscriptions.push(subscription);
    } else {
      this.product = new Product();
      this.setProductToForm(this.product);
    }
  }

  private initCategoryList() {
    const subscription = this.categoryService.getAll().subscribe(
      inCategories => {
        this.categories = inCategories;
      });
  }

  private setProductToForm(product: Product) {
    this.product = product;
    this.productForm.setValue({
      Product: {
        Id: product.Id,
        Name: product.Name,
        CategoryId: product.Category.Id,
        Category: product.Category
      },
      ProductName: product.Name,
      Category: product.Category
    });
  }

  returnToList() {
    this.router.navigate(["products"]);
  }

  private initProductId(): void {
    this.productId = +this.route.snapshot.params["id"];
  }

  productNameChanged(productName: string) {
    this.productForm.get("Product").value.Name = productName;
  }

  categoryChanged(categoryName) {
    const category = this.categories.filter(cat => cat.Name === categoryName)[0];
    if (category) {
      this.productForm.get("Product").value.Category = category;
    }
  }
}
