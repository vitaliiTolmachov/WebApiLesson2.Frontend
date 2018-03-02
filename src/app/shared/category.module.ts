import { Department } from "./department.module";

export class Category {
    Id: number;
    Name: string;
    DepartmentId: number;
    Department: Department;
  /*constructor (
    private id: number = null,
    private name: string = null,
    private departmentId: number = null,
    private department: Department
  ) {
    this.department = new Department();
  }*/
}
