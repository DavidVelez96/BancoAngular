import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service"
import { MyNewInterface } from '../cuentas/my-new-interface';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css'],
  providers:[ApiService]
})
export class CuentasComponent implements OnInit {

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
