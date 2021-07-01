import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { iCateg, iCateg2 } from '../interfaces/iCategories'



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categs: iCateg2[] = [];
  constructor(private httpClient : HttpClient) { }

  getCategs = async() => {
    this.categs = await this.httpClient.get<iCateg2[]>("assets/data/categories.json").toPromise();
    console.log(this.categs)
  }
}
