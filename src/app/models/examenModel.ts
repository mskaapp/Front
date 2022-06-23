export class examenModel{
  private id: number;
  private nombre: string;
  private tipo: string;
  private descripcion: string;
  private cantidad_exp: number;
  private fk_id_skill: number;

  constructor(id: number, nombre: string, tipo: string, descripcion: string, cantidad_exp: number, fk_id_skill: number){
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.descripcion = descripcion;
    this.cantidad_exp = cantidad_exp;
    this.fk_id_skill = fk_id_skill;

  }

  getId(): number {
    return this.id;
  }

  getNombre(): string{
    return this.nombre;
  }

  getTipo(): string {
    return this.tipo;
  }

  getDescripcion(): string {
    return this.descripcion;
  }

  getCantidad_exp(): number {
    return this.cantidad_exp;
  }

  getFk_id_skill(): number {
    return this.fk_id_skill;
  }
}
