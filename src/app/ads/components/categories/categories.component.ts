import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/ads/services/categories.service';
import { iCateg, iCateg2 } from '../../interfaces/iCategories';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoryComponent implements OnInit {
  items: MenuItem[] = [];
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/categories' };
  categs: iCateg2[] = [];
  selectedCateg: iCateg2 | undefined;
  id: number = 0;
  constructor(public CS: CategoriesService) {}

  asyncForEach = async (array: any, callback: any) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

  findCateg = (id: string) => {
    var i: number;
    console.log(id);
    const labels = this.CS.categs.map((categ) => {
      return categ.id;
    });
    i = labels.indexOf(id);
    return this.CS.categs[i].name;
  };

  findRoute = (id: string) => {
    var tempKeys: String[];
    // splitter la clé par blocs de 3 chiffres (avec RegEx)
    var re = /(\d{3})/;
    // filtrer les clés "vides"
    tempKeys = id.split(re).filter((item) => {
      return item.length > 0;
    });

    var i = 0;
    var tempKey: String = '';
    this.items = [];
    while (i <= tempKeys.length - 1) {
      tempKey = tempKey.concat(<string>tempKeys[i]);
      const label = this.findCateg(<string>tempKey);
      console.log('label', label);
      this.items.push({
        label: label,
      });
      i++;
    }
  };

  showSub2 = async (pCateg?: iCateg2) => {
    var lenKey = 3;
    var tempCategs: iCateg2[] = [];
    const categs = this.CS.categs;

    if (pCateg) {
      this.findRoute(pCateg!.id);
    }

    tempCategs = categs.filter((categ) => {
      if (pCateg) {
        lenKey = pCateg.id.length + 3;
      }
      var isIncluded = lenKey === categ.id.length;
      if (isIncluded && pCateg) {
        isIncluded =
          isIncluded && categ.id.substr(0, pCateg.id.length) === pCateg.id;
      }
      return isIncluded;
    });

    if (tempCategs.length === 0) {
      // Plus de sous-catégorie.
    } else {
      this.categs = tempCategs;
      if (pCateg && pCateg!.id.length >= 3) {
        this.categs.splice(0, 0, {
          id: pCateg!.id.substr(0, pCateg!.id.length - 3),
          name: 'Précédent',
        });
      }
    }
  };

  async ngOnInit() {
    await this.CS.getCategs();

    await this.showSub2();
  }
}
