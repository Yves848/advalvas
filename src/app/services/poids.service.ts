import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { poids } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PoidsService {

  constructor(private firestore: AngularFirestore) { }

  async getWeights() {
    var weights: poids[] = [];
    var ref = this.firestore.collection('weights');
    var data = await ref.get().toPromise().then(snapshot => {
      snapshot.forEach(doc => {
        let item = <poids>doc.data();
        item.id = doc.id;
        weights.push(<poids>item);
      })
    })
    return weights;
  }

  putWeight(aData: poids) {
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("weights").add(aData).then(res => {
        console.log('Résultat : ', res);
        resolve(res.id);
      }, err => reject(err))
    });
  }
}
