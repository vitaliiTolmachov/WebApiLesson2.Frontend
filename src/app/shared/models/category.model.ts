import { Department } from "./department.model";

export class Category {
    Id?: number;
    Name: string;
    DepartmentId: number;
    Department: Department;

  /*constructor (categories?: Category) {
    Object.assign(this, categories);
  }*/
}
