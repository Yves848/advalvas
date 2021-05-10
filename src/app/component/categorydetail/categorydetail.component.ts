import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.scss']
})
export class CategorydetailComponent implements OnInit {

  constructor(public categoryService: CategoriesService) { }

  ngOnInit(): void {
  }

}
