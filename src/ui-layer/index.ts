import type { DataLayer } from '~/data-layer';
import type { Store } from '~/store';
import type { UISharedParts } from './common';
import { CounterUI } from './counter';

export class UILayer {
  public counter: CounterUI;

  constructor(
    private readonly dataLayer: DataLayer,
    private readonly store: Store,
  ) {
    this.counter = new CounterUI(this.shared);
  }

  public get shared(): UISharedParts {
    return {
      dataLayer: this.dataLayer,
      store: this.store,
    };
  }
}
