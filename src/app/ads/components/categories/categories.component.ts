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
      categ.parent = parent;
      this.id++;
      if (categ.subCateg) {
        await this.getCategs(categ.subCateg, categ.parent);
      }
    });
  };

  showSub2 = async (pCateg?: iCateg) => {
    var tCategs: iCateg[] = [];
    var parent: iCateg;

    console.log('pCateg', pCateg);

    if (pCateg) {
      if (pCateg.id === -1) {
        if (pCateg.parent?.parent) {
          console.log('Précédent',pCateg)
          tCategs = pCateg.parent!.parent!.subCateg!;
        }
        else {
          tCategs = tCategs = this.CS.categs;
        }

      } else {
        tCategs = pCateg!.subCateg!;
      }
    } else {
      tCategs = this.CS.categs;
    }

    this.categs = [];
    if (pCateg) {
      if (pCateg.id !== -1)
      {
      this.categs.push({
        id: -1,
        name: 'Précédent',
        parent: pCateg,
      });
    }
    }

    await this.asyncForEach(tCategs, async (categ: iCateg) => {
      //console.log('asyncForEach', categ);
      if (pCateg) {
        categ.parent = pCateg!;
      }
      this.categs.push(categ);
    });
    console.log('this.categs', this.categs);
  };

  /*
  showSub = async (aCategs?: iCateg[], pcateg?: iCateg) => {
    console.log(
      '###############################################################'
    );
    console.log('ShowSub aCateg', aCategs);
    //console.log('ShowSub pcateg',pcateg);
    var tempCategs: iCateg[] | undefined;

    this.categs = [];
    if (pcateg) {
      console.log(`Id: ${pcateg.id}`, pcateg);
      if (pcateg.id === -1) {
        console.log('click sur Précédent');
        if (pcateg.parent?.parent!) {
          console.log('un');
          if (pcateg.parent!.subCateg) {
            console.log('deux');
            tempCategs = pcateg.parent!.parent.subCateg;
          } else {
            tempCategs = this.CS.categs;
          }
        } else {
          tempCategs = this.CS.categs;
        }
      } else {
        if (aCategs) {
          tempCategs = [];
          console.log('[1] aCategs', aCategs);
          var parent: iCateg[] | undefined;
          if (pcateg) {
            parent = pcateg.parent?.subCateg;
          } else {
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
*/
  async ngOnInit() {
    await this.CS.getCategs();
    await this.getCategs(this.CS.categs);
    await this.showSub2();
  }
}
