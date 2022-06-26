export class poseeModel{
  public id: number;
  public fk_id_skill: number;
  public fk_id_trabajo: number;

  constructor(id: number, fk_id_skill: number, fk_id_trabajo: number){
    this.id = id;
    this.fk_id_skill = fk_id_skill;
    this.fk_id_trabajo = fk_id_trabajo;

  }

  getId(): number{
    return this.id;
  }

  getFk_id_skill(): number{
    return this.fk_id_skill;
  }

  getFk_id_trabajo(): number{
    return this.fk_id_trabajo;
  }
}
