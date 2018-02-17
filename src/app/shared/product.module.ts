import { Category } from "./category.module";


export class Product {
    Id: number;
    Name: string;
    CategoryId: number;
    Category: Category;
}
