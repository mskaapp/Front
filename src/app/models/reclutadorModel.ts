export class reclutadorModel {
  private id: number;
  private experiencia: number;
  private nivel: number;
  private web: string;
  private tipo_reclutador: string;

  constructor(id: number, experiencia: number, nivel: number, web: string, tipo_reclutador: string){
      this.id = id;
      this.experiencia = experiencia;
      this.nivel = nivel;
      this.web = web;
      this.tipo_reclutador = tipo_reclutador;

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
}
