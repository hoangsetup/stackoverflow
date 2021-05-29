import { auth } from 'firebase-admin';

export default class Test {
  constructor(
    private userService: any,
  ) {}

  async validateUser(payload: string): Promise<any> {
    try {
      const resp = await auth().verifyIdToken(payload, true);

      return await this.userService.findByUsername(resp.email);
    } catch (e) {
      return null;
    }
  }
}

