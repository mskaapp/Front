export class tecnicoModel {
  private id: number;
  private experiencia: number;
  private nivel: number;
  private github: string;
  private pinterest: string;
  private trabajo_en_curso: number;
  private trabajos_finalizados: number;
  private tipo_tecnico: string;

  constructor(id: number, experiencia: number, nivel: number, github: string, pinterest: string, trabajo_en_curso: number,
    trabajos_finalizados: number, tipo_tecnico: string){
      this.id = id;
      this.experiencia = experiencia;
      this.nivel = nivel;
      this.github = github;
      this.pinterest = pinterest;
      this.trabajo_en_curso = trabajo_en_curso;
      this.trabajos_finalizados = trabajos_finalizados;
      this.tipo_tecnico = tipo_tecnico;

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
    return this.github;
  }

  getPinterest(): string{
    return this.pinterest;
  }

  getTrabajo_en_curso(): number{
    return this.trabajo_en_curso;
  }

  getTrabajos_finalizados(): number{
    return this.trabajos_finalizados;
  }

  getTipo_tecnico(): string{
    return this.tipo_tecnico;
  }
}
