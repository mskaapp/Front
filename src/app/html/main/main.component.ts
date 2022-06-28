import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuarioModel } from 'src/app/models/usuarioModel';
import { postUsuarioModel } from 'src/app/models/postUsuarioModel';
import { PostCardComponent } from './post-card/post-card.component';

import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [NgbPaginationConfig]
})
export class MainComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    // private route: ActivatedRoute,
    private config: NgbPaginationConfig
    // private router: Router
    ) {

      this.config.boundaryLinks = true;

    }

  screenWidth       = screen.width;
  screenHeight      = screen.height;
  usuario!:         usuarioModel;
  postModel!:       postUsuarioModel;
  arrayPost!:       postUsuarioModel[];
  totalItems: number;
  page: number;
  previousPage: number;
  showPagination: boolean;
  path: any;
  order: any;
  lenght:   number;

  // pageActual: number = 1;
  screenSize() {
    //console.log(this.screenHeight);
  }

  ngOnInit(): void {
    this.screenSize();
    this.getPosts();
    this.lenght=this.arrayPost.length;
    this.page =1;
    this.previousPage =1;
    this.fillPosts(1);
  }

  getUserById(){
    //TODO: capture the id from field html and sustitute for 1
    this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/usuario/1').subscribe(
      response =>{
        //console.log(response);
        this.usuario=response;
      }
    );
  }
  getPosts(){
  //TODO: capture the id from field html and sustitute for user id
  this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/postusuario/').subscribe(
    response =>{
      //console.log(response);
      this.arrayPost=response;
    }
  );
  }

  sortTable(prop: string) {
    this.path = prop.split('.');
    this.order = this.order * (-1);
    return false;
  }


  fillPosts(page : number) : void {
    this.httpClient.get<any>('https://myskillaround-spring-testing.herokuapp.com/api/postusuario/').subscribe(

		  data => {
			if ((!data && !data.result) || (data && data.result && data.result.length ==0)) {
			  this.arrayPost = [];
			  this.showPagination = false;
        this.arrayPost = data;
			}
			else {
			  this.arrayPost = data.result;
			  this.totalItems = data.totalAmount;
			  this.showPagination = true;
			}

		  },
		  error => {
			// Aquí se debería tratar el error, bien mostrando un mensaje al usuario o de la forma que se desee.
		  }
		);
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.fillPosts(this.page-1);
    }
  }

}
