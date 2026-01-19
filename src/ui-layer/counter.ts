import { makeAutoObservable } from 'mobx';
import type { UISharedParts } from './common';

export class CounterUI {
  constructor(private readonly shared: UISharedParts) {
    makeAutoObservable(this);
  }

  // NOTE: This getter is not loosing reactivity
  public get num() {
    return this.shared.store.counter.num;
  }
}
