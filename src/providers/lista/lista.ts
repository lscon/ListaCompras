import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaProvider {

  apiUrl = 'http://localhost:8080/api/listas';
  listas: any;

  constructor(public http: HttpClient) {
    console.log('Hello ListaProvider Provider');
  }
  
  findAll() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+"")
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  findById(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+id)
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deleteById(id) {
    return new Promise(resolve => {
      this.http.delete(this.apiUrl+id)
      .subscribe(data => {
        resolve(data);
        console.log('The result is:');
        console.log(data);
      }, err => {
        console.log(err);
      });
    });
  }

  save(lista) {
    let data = JSON.stringify(lista);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl, data, { headers: { 'Content-Type': 'application/json' }})
      .subscribe(res => {
        resolve(res);
        console.log('The result is:'+res);
        console.log(lista);
      }, (err) => {
        reject(err);
        console.log(err);
      });
    });
  }

}

export class Lista {
  id: number;
  nome: string;
}