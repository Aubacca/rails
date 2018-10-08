import { LocoStoreState } from './loco-store';
import { CompanyState } from './company-store';
import { PwState } from './pw-store';

export interface RootState {
  company: CompanyState.State;
  myFeature: LocoStoreState.State;
  pwagen: PwState.State;
  //  myOtherFeature: MyOtherFeatureStoreState.State;
}
