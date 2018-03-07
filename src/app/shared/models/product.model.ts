import { Category } from "./category.model";


export class Product {
    Id: number;
    Name: String = "";
    CategoryId: number;
    Category: Category = new Category();

    /*constructor ( products?: Product) {
      Object.assign(this, products);
    }*/
}
