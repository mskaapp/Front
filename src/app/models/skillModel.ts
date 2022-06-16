export class poseeModel{
  private id: number;
  private tipo: string;
  private validado: boolean;
  private descripcion: string;
  private cantidad_exp: number;
  private id_posee: number;
  private id_examen: number;

  constructor(id: number, tipo: string, validado: boolean, descripcion: string, cantidad_exp: number, id_posee: number, id_examen: number){
    this.id = id;
    this.tipo = tipo;
    this.validado = validado;
    this.descripcion = descripcion;
    this.cantidad_exp = cantidad_exp;
    this.id_posee = id_posee;
    this.id_examen = id_examen;

  }

  getId(): number{
    return this.id;
  }

  getTipo(): string{
    return this.tipo;
  }

  getValidado(): boolean{
    return this.validado;
  }

  getDescripcion(): string{
    return this.descripcion;
  }

  getCantidad_exp(): number{
    return this.cantidad_exp;
  }

  getId_posee(): number{
    return this.id_posee;
  }

  getId_examen(): number{
    return this.id_examen;
  }
}
