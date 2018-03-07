import { Category } from "./category.module";


export class Product {
    Id: Number = 0;
    Name: String = "";
    CategoryId: Number = 0;
    Category: Category = new Category();

    /*constructor ( products?: Product) {
      Object.assign(this, products);
    }*/
}
