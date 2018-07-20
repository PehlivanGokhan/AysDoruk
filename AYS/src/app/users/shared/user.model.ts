import { UserType } from './user-type.model';
import { Base } from '../../shared/base.model';

export class User extends Base {
    public UserType: UserType;
    public FirstName: string;
    public LastName: string;
    public PhoneNumber: string;
    public PhoneNumber2: string = null;
    public DoorNumber: number;
}
