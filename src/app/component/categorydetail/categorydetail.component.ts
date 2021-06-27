import { Component, OnInit } from '@angular/core';
import { MealsService } from 'src/app/services/meals.service';

@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.scss']
})
export class CategorydetailComponent implements OnInit {

  constructor(public mealService: MealsService) { }

  ngOnInit(): void {
  }

}
