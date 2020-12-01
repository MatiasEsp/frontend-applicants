export class User {
  id?: number;
  nameUser: string;
  img_avatar: any;
  link: string;
  service: string;

  constructor() {
    this.nameUser = '';
    this.link = '';
    this.service = '';
  }

  static parseItem(data: any): User {
    let user = new User();
    user = { ...user, ...data };
    return user;
  }

  static parseArray(raws: any): User[] {
    if (!raws || !raws.length) {
      return [];
    }
    return raws.map((raw: any) => User.parseItem(raw));
  }
}
