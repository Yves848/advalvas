import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories : TreeNode[] = [];
  selectedNode: TreeNode = {};
  constructor(public mealService: MealsService) {

  }

  ngOnInit(): void {

  }



}
