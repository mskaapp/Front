export class bandage_tecnicoModel{
  private id: number;
  private nombre: string;
  private tipo: string;
  private descripcion: string;
  private cantidadExp: number;
  private id_obtieneT: number;

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
