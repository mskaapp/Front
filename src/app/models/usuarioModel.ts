export class usuarioModel {
  public id: number;
  public nombre: string;
  public apellidos: string;
  public email: string;
  public username: any;
  public contraseña: any;
  public poblacion: string;
  public pais: string;
  public cp: number;
  public fecha_registro: Date;
  public fecha_nacimiento: Date;
  public movil: number;
  public instagram: any;
  public linkedin: any;
  public num_entrevista: number;
  public num_mensajes: number;
  public numTrabajos: number;
  public num_valoraciones: number;
  public url_foto: any;
  public fk_id_tecnico: number;
  public fk_id_reclutador:number;
  public id_mensaje: number;
  public id_entrevista: number;
  public id_trabajo: number;
  public id_comentarioTrabajo: number;
  public id_postUsuario: number;
  public id_valoracion: number;

  /*constructor(id: number, nombre: string, apellidos: string, email: string, nombre_usuario: any, contraseña: any, poblacion: string, pais: string, cp: number,
    fecha_registro: Date, fecha_nacimiento: Date, movil: number, instagram: any, linkedin: any, num_entrevista: number, num_mensajes: number,
    num_trabajos: number, num_valoraciones: number, url_foto: any, fk_id_tecnico:number, fk_id_reclutador:number, id_mensaje: number, id_entrevista: number,
    id_trabajo: number, id_comentarioTrabajo: number, id_postUsuario: number, id_valoracion: number) {
      this.id = id;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.email = email;
      this.nombre_usuario = nombre_usuario;
      this.contraseña = contraseña;
      this.poblacion = poblacion;
      this.pais = pais;
      this.cp = cp;
      this.fecha_registro = fecha_registro;
      this.fecha_nacimiento = fecha_nacimiento;
      this.movil = movil;
      this.instagram = instagram;
      this.linkedin = linkedin;
      this.num_entrevista = num_entrevista;
      this.num_mensajes = num_mensajes;
      this.num_trabajos = num_trabajos;
      this.num_valoraciones = num_valoraciones;
      this.url_foto = url_foto;
      this.fk_id_tecnico = fk_id_tecnico;
      this.fk_id_reclutador = fk_id_reclutador;
      this.id_mensaje = id_mensaje;
      this.id_entrevista = id_entrevista;
      this.id_trabajo = id_trabajo;
      this.id_comentarioTrabajo = id_comentarioTrabajo;
      this.id_postUsuario = id_postUsuario;
      this.id_valoracion = id_valoracion;
  }*/

  getId(): number {
      return this.id;
  }

  getNombre(): string {
      return this.nombre;
  }

  getApellidos(): string {
    return this.apellidos;
  }

  getEmail(): string {
    return this.email;
  }

  getNombre_usuario(): any {
    return this.username;
  }

  getContraseña(): any {
    return this.contraseña;
  }

  getPoblacion(): string {
    return this.poblacion;
  }

  getPais(): string {
    return this.pais;
  }

  getCp(): number {
    return this.cp;
  }

  getFecha_registro(): Date {
    return this.fecha_registro;
  }

  getFecha_nacimiento(): Date {
    return this.fecha_nacimiento;
  }

  getMovil(): number {
    return this.movil;
  }

  getInstagram(): any {
    return this.instagram;
  }

  getLinkedin(): any {
    return this.linkedin;
  }

  getNum_entrevista(): number {
    return this.num_entrevista;
  }

  getNum_mensajes(): number {
    return this.num_mensajes;
  }

  getNum_trabajos(): number {
    return this.numTrabajos;
  }

  getNum_valoraciones(): number {
    return this.num_valoraciones;
  }

  getUrl_foto(): any {
    return this.url_foto;
  }

  getFk_id_reclutador(): number{
    return this.fk_id_reclutador;
  }

  getFk_id_tecnico(): number{
    return this.fk_id_tecnico;
  }

  getId_mensaje(): number {
    return this.id_mensaje;
  }

  getId_entrevista(): number {
    return this.id_entrevista;
  }

  getId_trabajo(): number {
    return this.id_trabajo;
  }

  getId_comentarioTrabajo(): number {
    return this.id_comentarioTrabajo;
  }

  getId_postUsuario(): number {
    return this.id_postUsuario;
  }

  getId_valoracion(): number {
    return this.id_valoracion;
  }
}
