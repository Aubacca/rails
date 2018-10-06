export interface State {
  companyList: Company[];
  error: any;
}

export const initialState: State = {
  companyList: [],
  error: null
};
