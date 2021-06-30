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
  id: number = 0;
  constructor(public CS: CategoriesService) {}

  asyncForEach = async (array: any, callback: any) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

  getCategs = async (aCategs: iCateg[], parent?: iCateg) => {
    await this.asyncForEach(aCategs, async (categ: iCateg) => {
      categ.id = this.id;
      if (parent) {
        categ.parent = parent;
      }
      this.id++;
      if (categ.subCategories) {
        await this.getCategs(categ.subCategories, categ);
      }
    });
  };

  showSub = async (aCategs?: iCateg[], pcateg?: iCateg) => {
    console.log('aCateg, pcateg', aCategs, pcateg);
    var tempCategs: iCateg[] = [];
    if (pcateg && pcateg!.id === -1) {
      tempCategs = pcateg?.parent?.subCategories!;
      //pcateg = undefined;
    } else {
      tempCategs = aCategs!;
    }

    this.categs = [];
    if (pcateg) {
      this.categs.push({
        name: 'Précédent',
        parent: pcateg,
        id: -1,
      });
    }
    await this.asyncForEach(tempCategs, async (categ: iCateg) => {
      this.categs.push(categ);
    });
  };

  async ngOnInit() {
    await this.CS.getCategs();
    await this.getCategs(this.CS.categs);
    await this.showSub(this.CS.categs);
  }
}
