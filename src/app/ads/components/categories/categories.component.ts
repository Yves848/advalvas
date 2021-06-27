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
  selectedCateg : iCateg | undefined;
  constructor(public CS: CategoriesService) {}

  showSub = (categ?: iCateg) => {
    if (categ) {
      var aCateg: iCateg;
      if (categ!.name === 'Précédent') {
        aCateg = this.selectedCateg!;

      } else {
        aCateg = categ;
      }
      this.selectedCateg = categ;
      console.log('categ', categ)
      console.log('aCateg',aCateg);
      console.log('selectedCateg', this.selectedCateg)
      this.categs = [];
      if (aCateg!.subCategories) {
        this.categs.push({
          name: 'Précédent',
          parent: categ!,
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
  };

  async ngOnInit() {
    await this.CS.getCategs();
    this.showSub();
  }
}
