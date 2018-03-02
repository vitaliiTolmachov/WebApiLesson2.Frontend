import {Component, OnInit, OnDestroy } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../shared/product.module";
import {ProductService} from "../shared/services/product.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../shared/category.module";
import {CategoryService} from "../shared/services/category.service";
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
    this.initProductId();
    this.initProduct();
    this.initCategoryList();
  }
  private initProductForm() {
    this.productForm = this.formBuilder.group(
      {
        Product: [{}, Validators.required],
        Category: [{}, Validators.required]
      });

    /*this.productForm = new FormGroup(
      {
        ProductId: new FormControl(this.product.Id, [Validators.required]),
        ProductName: new FormControl(this.product.Name, [Validators.required]),
        CategoryId: new FormControl(this.product.Category.Id, [Validators.required]),
        Category: new FormControl(this.product.Category, [Validators.required]),
      });*/
  }
  onSubmit() {
    const subscription = this.productService.updateProduct(this.productForm.value)
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
            /*            console.log(`Product get OK/${JSON.stringify(inProduct)}`);*/
          this.product = inProduct;
          this.setProductToForm(inProduct);
          this.setProductCategoryToForm(inProduct.Category);
        });
      this.subscriptions.push(subscription);
    } else {
      this.setProductToForm(new Product());
      this.initCategoryList();
    }
  }

  private initCategoryList() {
    const subscription = this.categoryService.getAll().subscribe(
      inCategories => {
        /*console.log(`Categories get OK/${JSON.stringify(inCategories)}`);*/
        this.categories = inCategories;
      });
    this.subscriptions.push(subscription);
  }

  private setProductCategoryToForm(category: Category) {
    this.productForm.patchValue({
      Category: category
    });
  }

  private setProductToForm(product: Product) {
    this.productForm.patchValue({
      Product: {
        Id: "",
        Name: "",
        CategoryId: "",
        Category: {}
      }
    });
  }

  returnToList() {
    this.router.navigate(["products"]);
  }

  private initProductId(): void {
    this.productId = +this.route.snapshot.params["id"];
  }

  productNameChanged(value) {
    console.log(value);
}
