export class comentarioTrabajoModel{
  public id: number;
  public comentario: string;
  public fecha_comentario: Date;
  public fk_id_usuario: number;
  public fk_id_trabajo: number;

  constructor(id: number, comentario: string, fecha_comentario: Date, fk_id_usuario: number, fk_id_trabajo: number){
    this.id = id;
    this.comentario = comentario;
    this.fecha_comentario = fecha_comentario;
    this.fk_id_usuario = fk_id_usuario;
    this.fk_id_trabajo = fk_id_trabajo;

  }

  getId(): number {
    return this.id;
  }

  getComentario(): string {
    return this.comentario;
  }

  getFecha_comentario(): Date {
    return this.fecha_comentario;
  }

  getFk_id_usuario(): number {
    return this.fk_id_usuario;
  }

  getFk_id_trabajo(): number {
    return this.fk_id_trabajo;
  }
}
