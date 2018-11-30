import { Vehicle } from 'src/app/models/models';

export interface State {
  locoList: Vehicle[] | null;
  isLoading: boolean;
  error: string;
  locoDetail: Vehicle | null;
  totalCount: number;
}

export const initialState: State = {
  locoList: [],
  isLoading: false,
  error: null,
  locoDetail: null,
  totalCount: 0
};
