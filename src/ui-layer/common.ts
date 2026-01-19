import type { DataLayer } from '~/data-layer';
import type { Store } from '~/store';

export type UISharedParts = {
  dataLayer: DataLayer;
  store: Store;
};
