import { Category } from "./category.module";


export class Product {
    Id: number;
    Name: string;
    CategoryId: number;
    Category: Category;
    /*constructor(
      private id: number = null,
      private name: string = null,
      private categoryId: number = null,
      private category?: Category) {
      if (this.category) {
        this.category =  category;
      }
    }*/
}
