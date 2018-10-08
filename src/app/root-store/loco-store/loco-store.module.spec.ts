import { LocoStoreModule } from './loco-store.module';

describe('LocoStoreModule', () => {
  let locoStoreModule: LocoStoreModule;

  beforeEach(() => {
    locoStoreModule = new LocoStoreModule();
  });

  it('should create an instance', () => {
    expect(locoStoreModule).toBeTruthy();
  });
});
