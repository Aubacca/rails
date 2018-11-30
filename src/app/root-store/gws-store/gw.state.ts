import { Vehicle } from 'src/app/models/models';

export interface State {
  gwList: Vehicle[] | null;
  error: string;
  totalCount: number;
}

export const initialState: State = { gwList: [], error: null, totalCount: 0 };
