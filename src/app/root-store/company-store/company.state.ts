export interface State {
  companyList: Company[] | null;
  error: any;
}

export const initialState: State = {
  companyList: [],
  error: null
};
