import { CompanyActionTypes, CompanyActions } from './company.actions';
import { State, initialState } from './company.state';

export function companyReducer(
  state = initialState,
  action: CompanyActions
): State {
  switch (action.type) {
    case CompanyActionTypes.GET_COMPANIES:
      return { ...state, error: null };

    case CompanyActionTypes.GET_COMPANIES_SUCCESS:
      return { ...state, companyList: action.payload.companyList };

    case CompanyActionTypes.GET_COMPANIES_FAILURE:
      return { ...state, companyList: [], error: action.payload.error };

    default:
      return state;
  }
}
