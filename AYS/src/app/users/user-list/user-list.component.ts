import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { process, State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  public users: User[] = [];
  public state: State = {
    skip: 0,
    take: 70,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: []
    }
  };

  public gridData: GridDataResult = process(this.users, this.state);

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.users, this.state);
  }

  constructor(private userService: UserService) {
    const userList = this.userService.getData();

    userList.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.users.push(y as User);
      });
      this.gridData = process(this.users, this.state);
    });

  }

  ngOnInit() {

  }

}



    // let user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Gökhan';
    // user.LastName = 'Pehlivan';
    // user.PhoneNumber = '05056386559';
    // user.DoorNumber = 54;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Cemile';
    // user.LastName = 'Koca';
    // user.PhoneNumber = '';
    // user.DoorNumber = 1;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Kasım';
    // user.LastName = 'Arslan';
    // user.PhoneNumber = '';
    // user.DoorNumber = 2;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Yalçın';
    // user.LastName = 'Ocak';
    // user.PhoneNumber = '';
    // user.DoorNumber = 3;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'İlhan';
    // user.LastName = 'Özdemir';
    // user.PhoneNumber = '';
    // user.DoorNumber = 4;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'İlker';
    // user.LastName = 'Solmaz';
    // user.PhoneNumber = '';
    // user.DoorNumber = 5;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Adem';
    // user.LastName = 'Gündüz';
    // user.PhoneNumber = '';
    // user.DoorNumber = 6;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Ayhan';
    // user.LastName = 'Aydın';
    // user.PhoneNumber = '';
    // user.DoorNumber = 7;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Serdar';
    // user.LastName = 'Parlak';
    // user.PhoneNumber = '';
    // user.DoorNumber = 8;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Recep';
    // user.LastName = 'Toprak';
    // user.PhoneNumber = '';
    // user.DoorNumber = 9;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Elmas';
    // user.LastName = 'Güngör';
    // user.PhoneNumber = '';
    // user.DoorNumber = 10;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Yücel';
    // user.LastName = 'Güngör';
    // user.PhoneNumber = '';
    // user.DoorNumber = 11;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Yunus';
    // user.LastName = 'Küçükoğlu';
    // user.PhoneNumber = '';
    // user.DoorNumber = 12;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Mehmet';
    // user.LastName = 'Çalışkan';
    // user.PhoneNumber = '';
    // user.DoorNumber = 13;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Mehmet Ali';
    // user.LastName = 'Yılmaz';
    // user.PhoneNumber = '';
    // user.DoorNumber = 14;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Oğuz';
    // user.LastName = 'Güven';
    // user.PhoneNumber = '';
    // user.DoorNumber = 15;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Gültekin';
    // user.LastName = 'Görengen';
    // user.PhoneNumber = '';
    // user.DoorNumber = 16;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Cahit Çoşkun';
    // user.LastName = 'Altınoğlu';
    // user.PhoneNumber = '';
    // user.DoorNumber = 17;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Gamze';
    // user.LastName = 'Güngör';
    // user.PhoneNumber = '';
    // user.DoorNumber = 18;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Ali';
    // user.LastName = 'Balcı';
    // user.PhoneNumber = '';
    // user.DoorNumber = 19;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Rıza';
    // user.LastName = 'Gülegen';
    // user.PhoneNumber = '';
    // user.DoorNumber = 20;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Satı';
    // user.LastName = 'Bozkurt';
    // user.PhoneNumber = '';
    // user.DoorNumber = 21;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Selim';
    // user.LastName = 'Küçükoğlu';
    // user.PhoneNumber = '';
    // user.DoorNumber = 22;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'İbrahim Mustafa';
    // user.LastName = 'Aytaş';
    // user.PhoneNumber = '';
    // user.DoorNumber = 23;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Arife';
    // user.LastName = 'Erdem';
    // user.PhoneNumber = '';
    // user.DoorNumber = 24;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Ergün';
    // user.LastName = 'Kaya';
    // user.PhoneNumber = '';
    // user.DoorNumber = 25;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Erdem';
    // user.LastName = 'Yıldız';
    // user.PhoneNumber = '';
    // user.DoorNumber = 26;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Yasin';
    // user.LastName = 'Yavuz';
    // user.PhoneNumber = '';
    // user.DoorNumber = 27;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Mustafa';
    // user.LastName = 'Aydemir';
    // user.PhoneNumber = '';
    // user.DoorNumber = 28;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Ali';
    // user.LastName = 'Gündüz';
    // user.PhoneNumber = '';
    // user.DoorNumber = 29;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Mustafa';
    // user.LastName = 'Şimşek';
    // user.PhoneNumber = '';
    // user.DoorNumber = 30;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Nurten';
    // user.LastName = 'Yenici';
    // user.PhoneNumber = '';
    // user.DoorNumber = 31;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Burhanettin';
    // user.LastName = 'Erdem';
    // user.PhoneNumber = '';
    // user.DoorNumber = 32;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Mustafa Erkan';
    // user.LastName = 'Çiçek';
    // user.PhoneNumber = '';
    // user.DoorNumber = 33;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Doğan';
    // user.LastName = 'Altıntaş';
    // user.PhoneNumber = '';
    // user.DoorNumber = 34;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Nazmiye Alan Hesna';
    // user.LastName = 'Halıc';
    // user.PhoneNumber = '';
    // user.DoorNumber = 35;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Mehmet Fahri';
    // user.LastName = 'Yapıcıoğlu';
    // user.PhoneNumber = '';
    // user.DoorNumber = 36;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Ali';
    // user.LastName = 'Düzbasan';
    // user.PhoneNumber = '';
    // user.DoorNumber = 37;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Aycan';
    // user.LastName = 'Yıldırım';
    // user.PhoneNumber = '';
    // user.DoorNumber = 38;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Hüseyin';
    // user.LastName = 'Gökdemir';
    // user.PhoneNumber = '';
    // user.DoorNumber = 39;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Hasan';
    // user.LastName = 'Bugari';
    // user.PhoneNumber = '';
    // user.DoorNumber = 40;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Metin';
    // user.LastName = 'Gürleyen';
    // user.PhoneNumber = '';
    // user.DoorNumber = 41;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Fahri';
    // user.LastName = 'Karakuş';
    // user.PhoneNumber = '';
    // user.DoorNumber = 42;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Mikail';
    // user.LastName = 'Karayol';
    // user.PhoneNumber = '';
    // user.DoorNumber = 43;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Sinan';
    // user.LastName = 'Aydoğan';
    // user.PhoneNumber = '';
    // user.DoorNumber = 44;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Yakup';
    // user.LastName = 'Gör';
    // user.PhoneNumber = '';
    // user.DoorNumber = 45;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'İsa';
    // user.LastName = 'Sözen';
    // user.PhoneNumber = '';
    // user.DoorNumber = 46;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'ismail';
    // user.LastName = 'Kaya';
    // user.PhoneNumber = '';
    // user.DoorNumber = 47;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Güler';
    // user.LastName = 'Keskin';
    // user.PhoneNumber = '';
    // user.DoorNumber = 48;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Salih Savaş';
    // user.LastName = 'Çakır';
    // user.PhoneNumber = '';
    // user.DoorNumber = 49;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Mehmet';
    // user.LastName = 'Kavak';
    // user.PhoneNumber = '';
    // user.DoorNumber = 50;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Meltem';
    // user.LastName = 'Çetin';
    // user.PhoneNumber = '';
    // user.DoorNumber = 51;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Murat';
    // user.LastName = 'Tokat';
    // user.PhoneNumber = '';
    // user.DoorNumber = 52;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Abdurrahman';
    // user.LastName = 'Yavuz';
    // user.PhoneNumber = '';
    // user.DoorNumber = 53;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Alper';
    // user.LastName = 'Irmak';
    // user.PhoneNumber = '';
    // user.DoorNumber = 55;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Hasan';
    // user.LastName = 'Çağıl';
    // user.PhoneNumber = '';
    // user.DoorNumber = 56;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Hasan';
    // user.LastName = 'Çağıl';
    // user.PhoneNumber = '';
    // user.DoorNumber = 57;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Yüksel';
    // user.LastName = 'Çelikbaş';
    // user.PhoneNumber = '';
    // user.DoorNumber = 58;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Hüseyin Alp';
    // user.LastName = 'Akyıldız';
    // user.PhoneNumber = '';
    // user.DoorNumber = 59;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Davut';
    // user.LastName = 'Yavuz';
    // user.PhoneNumber = '';
    // user.DoorNumber = 60;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Hakkı';
    // user.LastName = 'Öztürk';
    // user.PhoneNumber = '';
    // user.DoorNumber = 61;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Ali Rıza';
    // user.LastName = 'Güner';
    // user.PhoneNumber = '';
    // user.DoorNumber = 62;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Daire';
    // user.LastName = 'Daire';
    // user.PhoneNumber = '';
    // user.DoorNumber = 63;

    // this.userService.insertUser(user);

    // user = new User();
    // user.UserType = 5;
    // user.FirstName = 'Admin';
    // user.LastName = 'Admin';
    // user.PhoneNumber = '05056386559';
    // user.DoorNumber = 0;

    // this.userService.insertUser(user);
