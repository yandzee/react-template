import { DataLayer } from '~/data-layer/index.ts';
import { Store } from '~/store/index.ts';
import { UILayer } from '~/ui-layer/index.ts';

export { ApplicationContext, useApplication } from './Provider.tsx';

interface Options {
  apiBaseURL: string;
}

export class Application {
  public ui: UILayer;
  public dataLayer: DataLayer;

  constructor(opts: Options) {
    const store = new Store();

    this.dataLayer = new DataLayer(store, opts);
    this.ui = new UILayer(this.dataLayer, store);
  }
}
