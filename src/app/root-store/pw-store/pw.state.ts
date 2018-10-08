export interface State {
  pwList: Vehicle[] | null;
  error: string;
}

export const initialState: State = { pwList: [], error: null };
