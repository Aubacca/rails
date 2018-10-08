import { PwsModule } from './pws.module';

describe('PwsModule', () => {
  let pwsModule: PwsModule;

  beforeEach(() => {
    pwsModule = new PwsModule();
  });

  it('should create an instance', () => {
    expect(pwsModule).toBeTruthy();
  });
});
