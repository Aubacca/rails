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
      const newTotal = action.payload.companyList.reduce(
        (accumulator, currentValue) => accumulator + 1,
        0
      );
      return {
        ...state,
        companyList: action.payload.companyList,
        totalCount: newTotal
      };

    case CompanyActionTypes.GET_COMPANIES_FAILURE:
      return {
        ...state,
        companyList: [],
        error: action.payload.error,
        totalCount: 0
      };

    default:
      return state;
  }
}
