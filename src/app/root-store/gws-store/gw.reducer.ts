import { GwActionTypes, GwActions } from './gw.actions';
import { initialState, State } from './gw.state';

export function gwReducer(state = initialState, action: GwActions): State {
  switch (action.type) {
    case GwActionTypes.LoadGw:
      return { ...state, error: null };

    case GwActionTypes.LoadGwSuccess:
      const newTotal = action.payload.gwList$.reduce(
        (accumulator, currentValue) => accumulator + currentValue.anzahl,
        0
      );
      return {
        ...state,
        gwList: action.payload.gwList$,
        error: null,
        totalCount: newTotal
      };

    case GwActionTypes.LoadGwFailure:
      return { ...state, error: action.payload.error, totalCount: 0 };

    default:
      return state;
  }
}
