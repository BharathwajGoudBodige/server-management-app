import { UserModel } from "../models/user.model";

export class UserService {
    private users:UserModel[] = [
        {uid:1,uName:'Ramesh',uDepartment:'Delivery'},
        {uid:2,uName:'Krishna',uDepartment:'HR'},
        {uid:3,uName:'Suresh',uDepartment:'IT Services'},
    ];
    getUsers():UserModel[] {
        return this.users;
    }
}