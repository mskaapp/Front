export class valoracionModel{
  private id: number;
  private estrellas: number;
  private comentario: string;
  private reclutador: string;
  private tecnico: string;
  private fk_id_usuario: number;

  constructor(id: number, estrellas: number, comentario: string, reclutador: string, tecnico: string, fk_id_usuario: number){
    this.id = id;
    this.estrellas = estrellas;
    this.comentario = comentario;
    this.reclutador = reclutador;
    this. tecnico = tecnico;
    this.fk_id_usuario = fk_id_usuario;

  }

  getId(): number{
    return this.id;
  }

  getEstrellas(): number{
    return this.estrellas;
  }

  getComentario(): string{
    return this.comentario;
  }

  getReclutador(): string{
    return this.reclutador;
  }

  getTecnico(): string{
    return this.tecnico;
  }

  getFk_id_usuario(): number{
    return this.fk_id_usuario;
  }
}
