import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { poids } from 'src/app/interfaces/interfaces';
import { PoidsService } from 'src/app/services/poids.service';

@Component({
  selector: 'app-add-weights',
  templateUrl: './add-weights.component.html',
  styleUrls: ['./add-weights.component.scss']
})
export class AddWeightsComponent implements OnInit {
  dateMesure: Date = new Date();

  scheduleOptions = {
    firstDay: '0',
    dateFormat: 'dd/mm/yyyy'
  }

  aWeight: poids = {
    date: "",
    poids: 0,
    remarque: ""
  }
  constructor(public poidsService: PoidsService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
  }

  close = () => {
    this.ref.close(undefined);
  };

  saveWeight = async (event: MouseEvent) => {
    const { data } = this.config;
    const jour = this.dateMesure.getDate().toString().padStart(2, '0');
    const mois = (this.dateMesure.getMonth() + 1).toString().padStart(2, '0');
    const annee = this.dateMesure.getFullYear().toString();
    const sdate = `${annee}-${mois}-${jour}`;

    this.aWeight = {
      date: sdate,
      poids: this.aWeight.poids,
      remarque: this.aWeight.remarque
    };

    this.poidsService.putWeight(this.aWeight);

    this.ref.close({ mode: data.mode, aWeight: this.aWeight });
  };

}
