import type { Store } from '~/store';

export interface Options {
  apiBaseURL: string;
}

export class DataLayer {
  constructor(
    readonly store: Store,
    opts: Options,
  ) { }
}
