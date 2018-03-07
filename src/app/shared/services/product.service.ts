import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/product.model";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
// import "rxjs/add/observable/of"; // remove

// TODO: REMOVE LATER !
// const mockAll = [
//     {
//         "Id": 2,
//         "Name": "Shaker Red",
//         "CategoryId": 5,
//         "Category": {
//             "Id": 5,
//             "Name": "Shakers",
//             "DepartmentId": 3,
//             "Department": null
//         }
//     },
//     {
//         "Id": 3,
//         "Name": "Dumbbell 17 kg",
//         "CategoryId": 6,
//         "Category": {
//             "Id": 6,
//             "Name": "Dumbbells",
//             "DepartmentId": 3,
//             "Department": null
//         }
//     },
//     {
//         "Id": 4,
//         "Name": "Dumbbell 20kg",
//         "CategoryId": 6,
//         "Category": {
//             "Id": 6,
//             "Name": "Dumbbells",
//             "DepartmentId": 3,
//             "Department": null
//         }
//     },
//     {
//         "Id": 5,
//         "Name": "SwimmingTrunks S",
//         "CategoryId": 7,
//         "Category": {
//             "Id": 7,
//             "Name": "Swimming Trunks",
//             "DepartmentId": 4,
//             "Department": null
//         }
//     },
//     {
//         "Id": 6,
//         "Name": "SwimmingTrunks M",
//         "CategoryId": 7,
//         "Category": {
//             "Id": 7,
//             "Name": "Swimming Trunks",
//             "DepartmentId": 4,
//             "Department": null
//         }
//     },
//     {
//         "Id": 7,
//         "Name": "SwimmingHat Red",
//         "CategoryId": 8,
//         "Category": {
//             "Id": 8,
//             "Name": "Swimming Hats",
//             "DepartmentId": 4,
//             "Department": null
//         }
//     },
//     {
//         "Id": 8,
//         "Name": "SwimmingHat Blue",
//         "CategoryId": 8,
//         "Category": {
//             "Id": 8,
//             "Name": "Swimming Hats",
//             "DepartmentId": 4,
//             "Department": null
//         }
//     }
// ];

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(environment.productsApiUrl);
        // return Observable.of(mockAll);
    }

    deleteProduct(id: number): Observable<Product> {
        const url = `${environment.productsApiUrl}/${id}`;
        return this.http.delete<Product>(url);
    }
    getProduct(id: number): Observable<Product> {
      const url = `${environment.productsApiUrl}/${id}`;
      return this.http.get<Product>(url);
    }
    addNewProduct(product: Product): Observable<Product> {
      const url = `${environment.productsApiUrl}`;
      return this.http.put<Product>(url, product);
    }
    updateProduct(product: Product): Observable<Product> {
    const url = `${environment.productsApiUrl}`;
    return this.http.patch<Product>(url, product);
    }
}
