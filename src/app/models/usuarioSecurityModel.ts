export class usuarioSecurityModel{
  public id: number;
  public username: any;
  public password: any;
  public rol: any;

  constructor(id: number, username: any, password: any, rol: any){
    this.id = id;
    this.username = username;
    this.password = password;
    this.rol = rol;
  }

  getId(): number{
    return this.id;
  }

  getUsername(): any{
    return this.username;
  }

  getPassword(): any{
    return this.password;
  }

  getRol(): any{
    return this.rol;
  }
}
