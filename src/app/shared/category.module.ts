import { Department } from "./department.module";

export class Category {
    Id?: Number = 0;
    Name: String = "";
    DepartmentId: Number = 0;
    Department: Department = new Department();

  /*constructor (categories?: Category) {
    Object.assign(this, categories);
  }*/
}
