export class obtieneTModel{
  private id: number;
  private fk_id_tecnico: number;
  private fk_id_bandage_tecnico: number;

  constructor(id: number, fk_id_tecnico: number, fk_id_bandage_tecnico: number){
    this.id = id;
    this.fk_id_tecnico = fk_id_tecnico;
    this.fk_id_bandage_tecnico = fk_id_bandage_tecnico;

  }

  getId(): number{
    return this.id;
  }

  getFk_id_tecnico(): number{
    return this.fk_id_tecnico;
  }

  getFk_id_bandage_tecnico(): number{
    return this.fk_id_bandage_tecnico;
  }
}
