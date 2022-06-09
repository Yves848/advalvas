import { Component, HostListener, OnInit } from '@angular/core';
import { PointPrefixedOptions } from 'chart.js';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { poids, windowDimensions } from 'src/app/interfaces/interfaces';
import { PoidsService } from 'src/app/services/poids.service';
import { AddWeightsComponent } from '../add-weights/add-weights.component';

@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.scss'],
  providers: [DialogService]
})

export class PoidsComponent implements OnInit {
  Weights: poids[] = [];
  ref: DynamicDialogRef | undefined;
  differenceTotale: number = 0;
  dimensions: windowDimensions = {
    width: 0,
    height: 0
  }

  constructor(private poidService: PoidsService,
    private dialogService: DialogService) { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getDimensions();
  }

  asyncForEach = async (anArray: any[], callbak: any) => {
    console.log('for');
    for (var i = 0; i <= anArray.length - 1; i++) {
      await callbak(anArray[i], i);
    }
  };

  getDimensions() {
    this.dimensions = {
      width: document.body.offsetWidth,
      height: document.body.offsetHeight
    }
    console.log('dimensions', this.dimensions);
  }

  async ngOnInit() {
    await this.getWeights();

  }

  Add(): void {
    this.ref = this.dialogService.open(AddWeightsComponent, {
      data: { mode: 0 },
      header: 'Ajouter une mesure',
      width: '60rem',
      contentStyle: { 'max-height': '1000px', overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  Edit(event: poids): void {

  }

  onDelete(Id: string) {

  }

  getWeights = async () => {
    let tempWeights: poids[] = [];
    const weights = await this.poidService.getWeights();

    await this.asyncForEach(weights, (element: poids, i: number) => {
      tempWeights.push(element);
    });

    this.Weights = tempWeights.sort((poids1: poids, poids2: poids) => {
      if (poids1.poids <= poids2.poids) return 1
      else return -1;
    });

    tempWeights = [];
    let oldPoids: number = 0;
    await this.asyncForEach(this.Weights, (element: poids, i: number) => {
      let difference: number = 0;
      console.log(element.poids, i)
      if (i === 0) {
        oldPoids = element.poids;
        difference = 0;
      }
      else {
        oldPoids = this.Weights[i - 1].poids;
        console.log('oldPoids', oldPoids, typeof (oldPoids));
        console.log('poids', element.poids, typeof (element.poids));
        //debugger;
        difference = parseFloat((oldPoids - element.poids).toFixed(2)) * -1;
        console.log('difference', difference);
      }
      this.differenceTotale = this.differenceTotale + difference;
      tempWeights.push({
        date: element.date,
        poids: element.poids,
        difference: difference,
        remarque: element.remarque
      });
    });
    this.differenceTotale = parseFloat(this.differenceTotale.toFixed(2));
    this.Weights = tempWeights;
  }

}
