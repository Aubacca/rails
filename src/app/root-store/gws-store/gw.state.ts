export interface State {
  gwList: Vehicle[] | null;
  error: string;
}

export const initialState: State = { gwList: [], error: null };
