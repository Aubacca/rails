import { SpinnerStoreModule } from './spinner-store.module';

describe('SpinnerStoreModule', () => {
  let spinnerStoreModule: SpinnerStoreModule;

  beforeEach(() => {
    spinnerStoreModule = new SpinnerStoreModule();
  });

  it('should create an instance', () => {
    expect(spinnerStoreModule).toBeTruthy();
  });
});
