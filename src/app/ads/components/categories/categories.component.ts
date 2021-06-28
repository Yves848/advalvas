import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/ads/services/categories.service';
import { iCateg } from '../../interfaces/iCategories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoryComponent implements OnInit {
  categs: iCateg[] = [];
  selectedCateg: iCateg | undefined;
  constructor(public CS: CategoriesService) {}

  showSub = (categ?: iCateg) => {
    var aCateg: iCateg;
    if (categ) {
      if (categ!.name === 'Précédent') {
        aCateg = categ.parent!;
      } else {
        aCateg = categ!;
      }

      console.log('categ', categ);
      console.log('aCateg', aCateg);
      console.log('selectedCateg', this.selectedCateg);
      this.categs = [];
      if (aCateg && aCateg.subCategories) {
        this.categs.push({
          name: 'Précédent',
          parent: this.selectedCateg,
        });

        aCateg!.subCategories!.forEach((categ: iCateg) => {
          this.categs.push(categ);
        });
      } else {
        this.CS.categ.forEach((categ: iCateg) => {
          this.categs.push(categ);
        });
      }
    } else {
      this.categs = [];
      this.CS.categ.forEach((categ: iCateg) => {
        this.categs.push(categ);
      });
    }
    this.selectedCateg = categ;
  };

  async ngOnInit() {
    await this.CS.getCategs();
    console.log("cs.categ",this.CS.categ)
    this.showSub();
  }
}
