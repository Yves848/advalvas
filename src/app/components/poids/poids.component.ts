import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { poids } from 'src/app/interfaces/interfaces';
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

  constructor(private poidService: PoidsService,
    private dialogService: DialogService) { }

  asyncForEach = async (anArray: any[], callbak: any) => {
    console.log('for');
    for (var i = 0; i <= anArray.length - 1; i++) {
      await callbak(anArray[i]);
    }
  };

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
    const tempWeights: poids[] = [];
    const weights = await this.poidService.getWeights();

    await this.asyncForEach(weights, (element: poids) => {
      tempWeights.push(element);
    });

    this.Weights = tempWeights.sort((poids1: poids, poids2: poids) => {
      if (poids1.poids <= poids2.poids) return 1
      else return -1;
    });

  }

}
