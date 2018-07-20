import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { User } from './user.model';

@Injectable()
export class UserService {

  userList: AngularFireList<any>;
  selectedUser: User = new User();
  constructor(private firebase: AngularFireDatabase) { }
  getData() {
    this.userList = this.firebase.list('users');
    return this.userList;
  }

  insertUser(user: User) {
    this.userList.push({
      CreateDate: user.CreateDate,
      UpdateDate: user.UpdateDate,
      DeleteDate: user.DeleteDate,
      IsDeleted: user.IsDeleted,
      FirstName: user.FirstName,
      LastName: user.LastName,
      PhoneNumber: user.PhoneNumber,
      PhoneNumber2: user.PhoneNumber2,
      UserType: user.UserType,
      DoorNumber: user.DoorNumber,
    });
  }

  updateUser(user: User) {
    this.userList.update(user.$key,
      {
        CreateDate: user.CreateDate,
        UpdateDate: user.UpdateDate,
        DeleteDate: user.DeleteDate,
        IsDeleted: user.IsDeleted,
        FirstName: user.FirstName,
        LastName: user.LastName,
        PhoneNumber: user.PhoneNumber,
        PhoneNumber2: user.PhoneNumber2,
        UserType: user.UserType,
        DoorNumber: user.DoorNumber,
      });
  }

  deleteUser($key: string) {
    this.userList.remove($key);
  }
}
