import { Component, OnInit } from '@angular/core';
import { poids } from 'src/app/interfaces/interfaces';
import { PoidsService } from 'src/app/services/poids.service';

@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.scss']
})

export class PoidsComponent implements OnInit {
  Weights: poids[] = [];

  constructor(private poidService: PoidsService) { }

  ngOnInit(): void {
  }

}
