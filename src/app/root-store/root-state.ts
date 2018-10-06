import { MyLocoStoreState } from './my-loco-store';
import { CompanyState } from './company-store';

export interface RootState {
  company: CompanyState.State;
  myFeature: MyLocoStoreState.State;
  //  myOtherFeature: MyOtherFeatureStoreState.State;
}
