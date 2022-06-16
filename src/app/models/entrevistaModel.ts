export class entrevistaModel{
  private id: number;
  private fecha_entrevista: Date;
  private duracion: number;
  private estado_entrevista: boolean;
  private fk_id_entrevistador: number;
  private fk_id_entrevistado: number;

  constructor(id: number, fecha_entrevista: Date, duracion: number, estado_entrevista: boolean,
    fk_id_entrevistador: number, fk_id_entrevistado: number){
      this.id = id;
      this.fecha_entrevista = fecha_entrevista;
      this.duracion = duracion;
      this.estado_entrevista = estado_entrevista;
      this.fk_id_entrevistador = fk_id_entrevistador;
      this.fk_id_entrevistado = fk_id_entrevistado;

  }

  getId(): number {
    return this.id;
  }

  getFecha_entrevista(): Date {
    return this.fecha_entrevista;
  }

  getDuracion(): number{
    return this.duracion;
  }

  getEstado_entrevista(): boolean {
    return this.estado_entrevista;
  }

  getFk_id_entrevistador(): number {
    return this.fk_id_entrevistador;
  }

  getFk_id_entrevistado(): number {
    return this.fk_id_entrevistado;
  }
}
