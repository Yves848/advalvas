import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories : TreeNode[] = [];
  selectedNode: TreeNode = {};
  constructor(public categService: CategoriesService) {

  }

  ngOnInit(): void {
    this.categService.getFiles().then((result) => {
      console.log(result)
      this.categories = result;
    }).catch((err) => {

    });
  }

  nodeSelect(event: any) {
    this.categService.selectedCategory = event.node;
    console.log(this.categService.selectedCategory);
  }

  export() {
    console.log('catégories : ',this.categories);
    const json = JSON.stringify(this.categories);
    console.log('catégories', json);
  }

}
