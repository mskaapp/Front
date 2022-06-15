export class usuarioModel {
  private id: number;
  private nombre: string;
  private apellidos: string;
  private email: string;
  private nombre_usuario: any;
  private contraseña: any;
  private poblacion: string;
  private pais: string;
  private cp: number;
  private fecha_registro: Date;
  private fecha_nacimiento: Date;
  private movil: number;
  private instagram: any;
  private linkedin: any;
  private num_entrevista: number;
  private num_mensajes: number;
  private num_trabajos: number;
  private num_valoraciones: number;
  private uri_foto: any;


  constructor(id: number, nombre: string, apellidos: string, email: string, nombre_usuario: any, contraseña: any, poblacion: string, pais: string, cp: number,
    fecha_registro: Date, fecha_nacimiento: Date, movil: number, instagram: any, linkedin: any, num_entrevista: number, num_mensajes: number,
    num_trabajos: number, num_valoraciones: number, uri_foto: any) {
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
      this.uri_foto = uri_foto;

  }

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
    return this.nombre_usuario;
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
    return this.num_trabajos;
  }

  getNum_valoraciones(): number {
    return this.num_valoraciones;
  }

  getUri_foto(): any {
    return this.uri_foto;
  }
}
