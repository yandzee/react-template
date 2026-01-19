// import type { AuthCredentials } from '~/data/auth';
// import { Loader } from '~/data/loader';
// import { sync } from '~/misc/utils';
// import type { Store } from '~/store';
// import { APIClient } from './api';
// import type { AuthResult } from '@repo/common/auth';

import type { Store } from '~/store';

export interface Options {
  apiBaseURL: string;
}

export class DataLayer {
  // private api: APIClient;
  //
  // private authLoader = new Loader({
  //   key: 'authLoader',
  //   loadFn: () => this.api.authCheck().then((r) => r.unwrap()),
  //   cacheReader: () => this.store.role || null,
  //   cacheWriter: (role) => {
  //     console.log(`Current auth role is "${role}"`);
  //     this.store.role = role;
  //   },
  // });
  //
  // private signupLoader = new Loader({
  //   key: 'signupLoader',
  //   loadFn: (d: AuthCredentials) => this.api.signUp(d).then((r) => r.unwrap()),
  //   cacheWriter: (result) => {
  //     this.store.role = result?.role ?? null;
  //   },
  // });
  //
  // private roundCreateLoader = new Loader({
  //   key: 'roundCreateLoader',
  //   loadFn: () => this.api.createRound(),
  // });

  constructor(
    private readonly store: Store,
    opts: Options,
  ) {
    // this.api = new APIClient({
    //   baseURL: opts.apiBaseURL,
    //   fetch: (...args) => window.fetch(...args),
    // });
  }

  // public guardAuthorization = sync(async () => {
  //   return await this.ensureAuthorization();
  // });
  //
  // public async ensureAuthorization(): Promise<string | null> {
  //   return this.authLoader.load(void 0);
  // }
}
