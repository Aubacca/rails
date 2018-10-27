import { GwsModule } from './gws.module';

describe('GwsModule', () => {
  let gwsModule: GwsModule;

  beforeEach(() => {
    gwsModule = new GwsModule();
  });

  it('should create an instance', () => {
    expect(gwsModule).toBeTruthy();
  });
});
