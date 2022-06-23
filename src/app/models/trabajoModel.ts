export class trabajoModel{
  private id: number;
  private descripcion: string;
  private fecha_ini: Date;
  private fecha_fin: Date;
  private estrellas: number;
  private presupuesto: number;
  private fk_id_asignador: number;
  private fk_id_asignado: number;
  private id_comentarioTrabajo: number;
  private id_posee: number;

  constructor(id: number, descripcion: string, fecha_ini: Date, fecha_fin: Date, estrellas: number, presupuesto: number, fk_id_asignador: number,
    fk_id_asignado: number, id_comentarioTrabajo: number, id_posee: number){
      this.id = id;
      this.descripcion = descripcion;
      this.fecha_ini = fecha_ini;
      this.fecha_fin = fecha_fin;
      this.estrellas = estrellas;
      this.presupuesto = presupuesto;
      this.fk_id_asignador = fk_id_asignador;
      this.fk_id_asignado = fk_id_asignado;
      this.id_comentarioTrabajo = id_comentarioTrabajo;
      this.id_posee = id_posee;

  }

  getId(): number{
    return this.id;
  }

  getDescripcion(): string{
    return this.descripcion;
  }

  getFecha_ini(): Date{
    return this.fecha_ini;
  }

  getFecha_fin(): Date{
    return this.fecha_fin;
  }

  getEstrellas(): number{
    return this.estrellas;
  }

  getPresupuesto(): number{
    return this.presupuesto;
  }

  getFk_id_asignador(): number{
    return this.fk_id_asignador;
  }

  getFk_id_asignado(): number{
    return this.fk_id_asignado;
  }

  getId_comentarioTrabajo(): number{
    return this.id_comentarioTrabajo;
  }

  getId_posee(): number{
    return this.id_posee;
  }
}
