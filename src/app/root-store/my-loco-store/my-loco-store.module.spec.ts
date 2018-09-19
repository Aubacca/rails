import { MyLocoStoreModule } from './my-loco-store.module';

describe('MyLocoStoreModule', () => {
  let myLocoStoreModule: MyLocoStoreModule;

  beforeEach(() => {
    myLocoStoreModule = new MyLocoStoreModule();
  });

  it('should create an instance', () => {
    expect(myLocoStoreModule).toBeTruthy();
  });
});
