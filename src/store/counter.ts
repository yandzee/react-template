import { makeAutoObservable } from 'mobx';

export class CounterStore {
  public num: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  public increment() {
    this.num += 1;
  }
}
