import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  selectedCategory : TreeNode = {};

  constructor(private http: HttpClient) {}

  getFiles() {
    return this.http
      .get<any>('../../assets/data/categories.json')
      .toPromise()
      .then((res) => <TreeNode[]>res.data);
  }
}
