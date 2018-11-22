import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service"
import { MyNewInterface } from '../tarjetas/my-new-interface';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
  providers:[ApiService]
})
export class TarjetasComponent implements OnInit {

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
