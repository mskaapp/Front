export class bandage_reclutadorModel{
  private id: number;
  private nombre: string;
  private tipo: string;
  private descripcion: string;
  private cantidadExp: number;
  private id_obtieneR: number;

  constructor(id:number, nombre: string, tipo: string, descripcion: string, cantidadExp: number, id_obtieneR: number){
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.cantidadExp = cantidadExp;
    this.id_obtieneR = id_obtieneR;

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

  getId_obtieneR(): number {
    return this.id_obtieneR;
  }
}
