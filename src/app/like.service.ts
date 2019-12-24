import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor() { }

  async minus(like: number) {
    return like -  1;
  }
}
