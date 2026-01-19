import { type AuthCredentials, type AuthResult, authResult } from '@repo/common/auth';
import { round, type Round } from '@repo/common/rounds';
import { APIClientBase } from '~/http/api';
import type { HTTPResult } from '~/http/result';
import { camelCasify } from '~/misc/utils';

export class APIClient extends APIClientBase {
  public ROLE_HEADER = 'X-Auth-Role';

  public async authCheck(): Promise<HTTPResult<string | null>> {
    return await this.http
      .get(`/auth`)
      .then((r) => r.text())
      .then((r) => {
        return r.map(() => r.headers.get(this.ROLE_HEADER));
      });
  }

  public async signUp(creds: AuthCredentials): Promise<HTTPResult<AuthResult>> {
    const res = await this.http.post('/auth', creds).then((r) => (r.isOk ? r.json() : r));

    return res.map((d: any) => {
      const res = authResult.safeParse(camelCasify(d));
      if (res.error != null) throw res.error;

      return res.data;
    });
  }

  public async createRound(): Promise<HTTPResult<Round>> {
    const res = await this.http.post('/rounds', {}).then((r) => (r.isOk ? r.json() : r));

    return res.map((d: any) => {
      const r = round.safeParse(camelCasify(d));
      if (r.error != null) throw r.error;

      return r.data;
    });
  }
}
