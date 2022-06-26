export class bandage_tecnicoModel{
  public id: number;
  public nombre: string;
  public tipo: string;
  public descripcion: string;
  public cantidadExp: number;
  public id_obtieneT: number;

  constructor(id:number, nombre: string, tipo: string, descripcion: string, cantidadExp: number, id_obtieneT: number){
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.cantidadExp = cantidadExp;
    this.id_obtieneT = id_obtieneT;

  }

  getId(): number {
    return this.id;
  }

  getNombre(): string {
    return this.nombre;
  }

  getTipo(): string {
    return this.tipo;
  }

  getDescripcion(): string {
    return this.descripcion;
  }

  getCantidadExp(): number {
    return this.cantidadExp;
  }

  getId_obtieneT(): number {
    return this.id_obtieneT;
  }
}
