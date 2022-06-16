export class reclutadorModel {
  private id: number;
  private experiencia: number;
  private nivel: number;
  private web: string;
  private tipo_reclutador: string;
  private id_usuario: number;
  private id_obtieneR: number;

  constructor(id: number, experiencia: number, nivel: number, web: string, tipo_reclutador: string, id_usuario: number, id_obtieneR: number){
      this.id = id;
      this.experiencia = experiencia;
      this.nivel = nivel;
      this.web = web;
      this.tipo_reclutador = tipo_reclutador;
      this.id_usuario = id_usuario;
      this.id_obtieneR = id_obtieneR;

  }

  getId(): number {
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
  }
}
