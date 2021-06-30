import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { iCateg } from '../interfaces/iCategories'



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categs: iCateg[] = [];
  constructor(private httpClient : HttpClient) { }

  getCategs = async() => {
    // this.httpClient.get("assets/data/categories.json").subscribe(data =>{
    //   this.categ = data;
    //   console.log('categs',this.categ)
    // })

    this.categs = await this.httpClient.get<iCateg[]>("assets/data/categories.json").toPromise();
  }
}
