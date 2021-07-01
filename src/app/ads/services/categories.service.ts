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
    this.categs = await this.httpClient.get<iCateg[]>("assets/data/categories.json").toPromise();
  }
}
