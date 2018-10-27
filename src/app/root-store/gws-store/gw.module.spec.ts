import { GwModule } from './gw.module';

describe('GwModule', () => {
  let gwModule: GwModule;

  beforeEach(() => {
    gwModule = new GwModule();
  });

  it('should create an instance', () => {
    expect(gwModule).toBeTruthy();
  });
});
