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
    console.log('###############################################################')
    console.log('ShowSub aCateg',aCategs);
    //console.log('ShowSub pcateg',pcateg);
    var tempCategs: iCateg[] | undefined;

    this.categs = [];
    if (pcateg) {
      console.log(`Id: ${pcateg.id}` , pcateg);
      if (pcateg.id === -1) {
        console.log('click sur Précédent');
        tempCategs = pcateg.parent!.parent!.subCategories;
      } else {
        if (aCategs) {
          tempCategs = [];
          console.log('[1] aCategs', aCategs);
          var parent : iCateg[] | undefined;
          if (pcateg) {
            parent = pcateg.parent?.subCategories;
          }
          else
          {
            parent = this.CS.categs;
          }
          tempCategs!.push({
            name: 'Précédent',
            parent: pcateg,
            id: -1,
          });
          tempCategs!.push(...aCategs!);
        } else {
          tempCategs = this.CS.categs;
        }
      }
    } else {
      // premier appel, Afficher la racine, sans élément parent.
      console.log('[2] aCategs', aCategs);
      tempCategs = aCategs!;
    }
    await this.asyncForEach(tempCategs, async (categ: iCateg) => {
      console.log('asyncForEach', categ);
      categ.parent = pcateg;
      this.categs.push(categ);
    });
  };

  async ngOnInit() {
    await this.CS.getCategs();
    await this.getCategs(this.CS.categs);
    await this.showSub(this.CS.categs);
  }
}
