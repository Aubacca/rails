import { Vehicle } from './../../features/overview/models/vehicle.model';

export interface State {
  locoList: Vehicle[] | null;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  locoList: null,
  isLoading: false,
  error: null
};
