export class postUsuarioModel{
  public id: number;
  public retweet: number;
  public likes: number;
  public fecha_post: Date;
  public link: string;
  public url_foto: any;
  public fk_id_usuario: number;

  constructor(id: number, retweet: number, likes: number, fecha_post: Date, link: string, url_foto: any, fk_id_usuario: number){
    this.id = id;
    this.retweet = retweet;
    this.likes = likes;
    this.fecha_post = fecha_post;
    this.link = link;
    this.url_foto = url_foto;
    this.fk_id_usuario = fk_id_usuario;

  }

  getId(): number{
    return this.id;
  }

  getRetweet(): number{
    return this.retweet;
  }

  getLikes(): number{
    return this.likes;
  }

  getFecha_post(): Date{
    return this.fecha_post;
  }

  getLink(): string{
    return this.link;
  }

  getUrl_foto(): any{
    return this.url_foto;
  }

  getFk_id_usuario(): number{
    return this.fk_id_usuario;
  }
}
