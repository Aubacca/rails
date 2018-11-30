import { Vehicle } from 'src/app/models/models';

export interface State {
  pwList: Vehicle[] | null;
  error: string;
  totalCount: number;
}

export const initialState: State = { pwList: [], error: null, totalCount: 0 };
