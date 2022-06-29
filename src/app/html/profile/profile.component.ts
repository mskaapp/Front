import { Component, OnInit } from '@angular/core';
import { usuarioModel } from 'src/app/models/usuarioModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  nombre: any;
  apellidos: any;
  fechaDeNacimiento: any;
  userName: any;



  bolBtnEditar: boolean = true;
  bolBtnGuadar: boolean = false;
  bolBtnCancelar: boolean = false;

  inputsReadOnly: boolean = true; //Readonly propierty

  //TODO: funcion de guardar datos
  usuario!:     usuarioModel;
  ProfileUser!: usuarioModel;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getUserById();
    //console.log("_________________NOMBRE________________________");
    //console.log("nombre: "+this.ProfileUser);
  }

  botonesEdicion(): void {}

  showGuardarCancelar() {
    this.bolBtnEditar   = false;
    this.bolBtnGuadar   = true;
    this.bolBtnCancelar = true;
    //Enable inputs
    this.inputsReadOnly = false;
  }

  hideGuardarCancelar() {
    this.bolBtnEditar   = true;
    this.bolBtnGuadar   = false;
    this.bolBtnCancelar = false;
    //UnEnable inputs
    this.inputsReadOnly = true;
  }

  getUserById(){
    //TODO: capture the id from field html and sustitute for 1
    this.httpClient.get<usuarioModel>('https://myskillaround-spring-testing.herokuapp.com/api/usuario/1').subscribe(
      response =>{
        console.log(response);
        this.ProfileUser=response;
      }
    );
  }
  //Method to enable the inputs
  updateUser(){
  //Visual Part
    this.bolBtnEditar   = true;
    this.bolBtnGuadar   = false;
    this.bolBtnCancelar = false;
    //UnEnable inputs
    this.inputsReadOnly = true;
  //Update Api
    this.httpClient.put<usuarioModel>(
      'https://myskillaround-spring-testing.herokuapp.com/api/usuario/1',
      this.ProfileUser).subscribe((result)=>{
        //console.log("UPDATING___________________");
        //console.log(result, "Data updated");
      })
  }
  updateUser2(){
    //Visual Part
      this.bolBtnEditar   = true;
      this.bolBtnGuadar   = false;
      this.bolBtnCancelar = false;
      //UnEnable inputs
      this.inputsReadOnly = true;
      console.log("___________USUARIO A ACTUALIZAR");
      console.log(this.ProfileUser);
    //Update Api
      this.httpClient.put<usuarioModel>(
        'https://myskillaround-spring-testing.herokuapp.com/api/usuario/1',
        this.ProfileUser).subscribe((result)=>{
          console.log("profileuser___________________");
          console.log(this.ProfileUser)
          console.log("UPDATING___________________");
          console.log(result, "Data updated");
        })
    }
    updateUser3(){
      //Visual Part
        this.bolBtnEditar   = true;
        this.bolBtnGuadar   = false;
        this.bolBtnCancelar = false;
        //UnEnable inputs
        this.inputsReadOnly = true;
        console.log("___________USUARIO A ACTUALIZAR");
        console.log(this.ProfileUser);
      //Update Api
        this.httpClient.put<usuarioModel>
        ('https://myskillaround-spring-testing.herokuapp.com/api/usuario/1', this.ProfileUser).subscribe(
          (result)=>{
            console.log(result, "Data updated");
          }
        );
      }
}
