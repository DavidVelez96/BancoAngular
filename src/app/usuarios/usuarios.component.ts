import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service"
import { MyNewInterface } from '../usuarios/my-new-interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers:[ApiService]
})
export class UsuariosComponent implements OnInit {

  _postsArray: MyNewInterface[];

  constructor(private apiSerivce: ApiService) { }

  getPosts(): void {
    this.apiSerivce.getPosts().
    subscribe(  
       resultArray => this._postsArray =
       resultArray,
       error => console.log("Error :: " + error ))
  }

  ngOnInit() {
    this.getPosts();
  }

}
