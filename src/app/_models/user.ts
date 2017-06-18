export class User {
  constructor(public id: number, public username: string, public nickname?: string, public gender?: string, public addr?: string, public img?: string){};
}

export class Gender {
  constructor(public code: string, public name: string){};
}