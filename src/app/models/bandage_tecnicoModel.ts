export class bandage_tecnicoModel{
  private id: number;
  private nombre: string;
  private tipo: string;
  private descripcion: string;
  private cantidadExp: number;

  constructor(id:number, nombre: string, tipo: string, descripcion: string, cantidadExp: number){
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.cantidadExp = cantidadExp;

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
}
