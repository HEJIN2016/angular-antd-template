import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(100)
      }, 1000);
    })
  }

  constructor() {
  }
}
