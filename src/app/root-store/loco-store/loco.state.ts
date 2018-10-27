export interface State {
  locoList: Vehicle[] | null;
  isLoading: boolean;
  error: string;
  locoDetail: Vehicle | null;
}

export const initialState: State = {
  locoList: [],
  isLoading: false,
  error: null,
  locoDetail: null
};
