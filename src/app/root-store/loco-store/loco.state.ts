export interface State {
  locoList: Vehicle[] | null;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  locoList: [],
  isLoading: false,
  error: null
};
