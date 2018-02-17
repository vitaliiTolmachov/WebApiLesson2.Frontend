import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Product } from "../product.module";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Product[]> {

        return this.http.get<Product[]>(environment.productsApiUrl);
    }

    deleteProduct(id: number): Observable<Product> {
        const url = `${environment.productsApiUrl}/${id}`;
        return this.http.delete<Product>(url);
    }
}
