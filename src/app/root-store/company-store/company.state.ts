import { Company } from 'src/app/models/models';

export interface State {
  companyList: Company[] | null;
  error: any;
  totalCount: number;
}

export const initialState: State = {
  companyList: [],
  error: null,
  totalCount: 0
};
