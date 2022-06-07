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

  }

}
