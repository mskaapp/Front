export class mensajeModel{
  public id: number;
  public mensaje: string;
  public fecha_mensaje: Date;
  public fk_id_emisor: number;
  public fk_id_receptor: number;

  constructor(id: number, mensaje: string, fecha_mensaje: Date, fk_id_emisor: number, fk_id_receptor: number){
    this.id = id;
    this.mensaje = mensaje;
    this.fecha_mensaje = fecha_mensaje;
    this.fk_id_emisor = fk_id_emisor;
    this.fk_id_receptor = fk_id_receptor;

  }

  getId(): number {
    return this.id;
  }

  getMensaje(): string {
    return this.mensaje;
  }

  getFecha_mensaje(): Date {
    return this.fecha_mensaje;
  }

  getFk_id_emisor(): number{
    return this.fk_id_emisor;
  }

  getFk_id__receptor(): number{
    return this.fk_id_receptor;
  }
}
