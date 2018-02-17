import { Department } from "./department.module";

export class Category {
    Id: number;
    Name: string;
    DepartmentId: number;
    Department: Department;
}
