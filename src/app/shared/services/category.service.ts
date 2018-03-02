import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Category} from "../category.module";
import {environment} from "../../../environments/environment";

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.categoryApiUrl);
  }

}
