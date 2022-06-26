export class obtieneRModel{
  public id: number;
  public fk_id_reclutador: number;
  public fk_id_bandage_reclutador: number;

  constructor(id: number, fk_id_reclutador: number, fk_id_bandage_reclutador: number){
    this.id = id;
    this.fk_id_reclutador = fk_id_reclutador;
    this.fk_id_bandage_reclutador = fk_id_bandage_reclutador;

  }

  getId(): number{
    return this.id;
  }

  getFk_id_reclutador(): number{
    return this.fk_id_reclutador;
  }

  getFk_id_bandage_reclutador(): number{
    return this.fk_id_bandage_reclutador;
  }
}
