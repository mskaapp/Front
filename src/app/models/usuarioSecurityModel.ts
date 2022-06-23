export class usuarioSecurityModel{
  private id: number;
  private username: any;
  private password: any;
  private rol: any;

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
