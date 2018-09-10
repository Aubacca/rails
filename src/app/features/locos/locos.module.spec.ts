import { LocosModule } from './locos.module';

describe('LocosModule', () => {
  let locosModule: LocosModule;

  beforeEach(() => {
    locosModule = new LocosModule();
  });

  it('should create an instance', () => {
    expect(locosModule).toBeTruthy();
  });
});
