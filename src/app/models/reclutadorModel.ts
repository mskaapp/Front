export class reclutadorModel {
  public id: number;
  public experiencia: number;
  public nivel: number;
  public web: string;
  public tipo_reclutador: string;
  public id_usuario: number;
  public id_obtieneR: number;

  constructor(id: number, experiencia: number, nivel: number, web: string, tipo_reclutador: string, id_usuario: number, id_obtieneR: number){
      this.id = id;
      this.experiencia = experiencia;
      this.nivel = nivel;
      this.web = web;
      this.tipo_reclutador = tipo_reclutador;
      this.id_usuario = id_usuario;
      this.id_obtieneR = id_obtieneR;

  }

  /*getId(): number {
    return this.id;
  }

  getExperiencia(): number{
    return this.experiencia;
  }

  getNivel(): number{
    return this.nivel;
  }

  getGithub(): string{
    return this.web;
  }

  getPinterest(): string{
    return this.tipo_reclutador;
  }

  getId_usuario(): number {
    return this.id_usuario;
  }

  getId_obtieneR(): number {
    return this.id_obtieneR;
  }*/
}
